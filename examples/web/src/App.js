import React from 'react'
import { Provider } from 'jotai/react'
import { useAtom } from 'jotai'
import { store, countAtom, userAtom, todosAtom } from './store'
import './reactotron.config'

const Base = () => {
  const [count, setCount] = useAtom(countAtom)
  const [, setUser] = useAtom(userAtom)
  const [, setTodos] = useAtom(todosAtom)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setUser({ name: 'Jane Doe', age: 25 })}>Change user</button>
      <button onClick={() => setTodos([{ id: 3, title: 'Buy groceries' }])}>Change todos</button>
    </div>
  )
}

const Root = () => {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  )
}

export default Root
