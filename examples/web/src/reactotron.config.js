import Reactotron from 'reactotron-react-js'
import { jotaiPlugin } from 'jotai-reactotron-plugin'
import { reacotronConfig } from './store'

Reactotron.configure().use(jotaiPlugin(reacotronConfig)).connect()
