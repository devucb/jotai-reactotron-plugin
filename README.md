# jotai-reactotron-plugin

🔌 A lightweight plugin to inspect Jotai atom state changes via Reactotron.

## ✨ Features

- See initial atom values
- Automatically subscribes to atom changes

## 📦 Installation

```bash
yarn add jotai-reactotron-plugin
# or
npm install jotai-reactotron-plugin
```

## 🔌 Usage

```js
import { jotaiPlugin } from 'jotai-reactotron-plugin'

Reactotron.configure()
  .use(
    jotaiPlugin({
      store,
      atoms: [
        {
          name: 'count',
          atom: countAtom,
        },
      ],
    }),
  )
  .connect()
```
