import { getDefaultStore } from 'jotai'
import { AtomState, ReactotronCore, StorePluginOptions } from './types'

export function jotaiPlugin({ atoms, store }: StorePluginOptions) {
  return (reactotron: ReactotronCore) => {
    const subscriptions: (() => void)[] = []

    const jotaiStore = store ?? getDefaultStore()
    const atomStates: Record<string, AtomState> = {}
    const sendStates = () => {
      const changes = Object.entries(atomStates)
        .sort(([, { timestamp }], [, { timestamp: timestamp2 }]) => timestamp2 - timestamp)
        .map(([name, { value }]) => ({
          path: name,
          value,
        }))

      reactotron.send('state.values.change', {
        changes,
      })
    }
    for (const { name, atom } of atoms) {
      if (atomStates[name]) {
        reactotron.send('log', {
          message: `Atom ${name} already exists!!`,
          level: 'warn',
        })
        continue
      }

      const value = jotaiStore.get(atom)
      atomStates[name] = {
        value,
        timestamp: Date.now(),
      }
      const unsub = jotaiStore.sub(atom, () => {
        const next = jotaiStore.get(atom)
        atomStates[name] = {
          value: next,
          timestamp: Date.now(),
        }
        sendStates()
      })

      subscriptions.push(unsub)
    }

    sendStates()

    return {
      onDisconnect: () => {
        subscriptions.forEach((unsub) => unsub())
      },
    }
  }
}
