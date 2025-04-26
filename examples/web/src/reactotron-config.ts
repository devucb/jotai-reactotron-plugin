import { createClient } from 'reactotron-core-client'
import { jotaiPlugin } from 'jotai-reactotron-plugin'
import { reacotronConfig } from './store'
const reactotron = createClient({
  host: 'localhost',
  port: 9090,
  client: {
    platform: 'web',
  },
  name: 'vite-reactotron',
  environment: 'development',

  createSocket(path) {
    return new WebSocket(`${path}`)
  },
})

reactotron.use(jotaiPlugin(reacotronConfig)).connect()
