import { type UserConfig } from '@farmfe/core'
import weappPlugin from '../../src/index'

export default {
  compilation: {
    input: { index: 'miniprogram/app.json' },
    output: {
      path: 'dist',
      filename: 'index.[ext]',
      targetEnv: 'node'
    }
  },
  plugins: [weappPlugin()]
} satisfies UserConfig
