import { atom, createStore } from 'jotai/vanilla'

const store = createStore(() => {})
const countAtom = atom(0)
const userAtom = atom({ name: 'John', age: 30 })
const todosAtom = atom([
  { id: 1, title: 'Buy groceries' },
  { id: 2, title: 'Buy groceries' },
])

const reacotronConfig = {
  store,
  atoms: [
    { name: 'count', atom: countAtom },
    { name: 'user', atom: userAtom },
    { name: 'todos', atom: todosAtom },
  ],
}
export { store, countAtom, userAtom, todosAtom, reacotronConfig }
