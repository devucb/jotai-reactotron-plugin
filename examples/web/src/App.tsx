import { useAtom } from 'jotai/react'
import { countAtom, userAtom, todosAtom } from './store.ts'
import reactLogo from './assets/react.svg'

const Base = () => {
  const [count, setCount] = useAtom(countAtom)
  const [, setUser] = useAtom(userAtom)
  const [, setTodos] = useAtom(todosAtom)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://cdn.candycode.com/jotai/jotai-mascot.png"
            alt="logo"
            className="h-20 w-20 animate-spin-slow"
          />
          <img src={reactLogo} alt="logo" className="h-20 w-20 animate-spin-slow" />
        </div>
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-white ml-4 text-center">Jotai Reactotron Plugin</h1>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            Count is {count}
          </button>

          <button
            onClick={() => setUser({ name: 'Jane', age: 20 })}
            className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            Set User
          </button>

          <button
            onClick={() => setTodos([{ id: 3, title: 'Buy groceries' }])}
            className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            Set Todos
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return <Base />
}
