import { Atom } from 'jotai'
import { createStore } from 'jotai/vanilla'
import { ReactotronCore } from 'reactotron-core-client'

type StoreItem = {
  name: string
  atom: Atom<unknown>
}

type StorePluginOptions = {
  atoms: StoreItem[]
  store?: ReturnType<typeof createStore>
}

type AtomState = {
  value: unknown
  timestamp: number
}

export type { StoreItem, StorePluginOptions, AtomState, ReactotronCore }
