import { type UserConfig } from '@farmfe/core'
import { builtinModules } from 'node:module'

export default {
  compilation: {
    input: { index: 'src/index.ts' },
    output: {
      path: 'dist',
      filename: 'index.[ext]',
      targetEnv: 'node'
    },
    external: [
      ...builtinModules.map((m) => `^${m}$`),
      ...builtinModules.map((m) => `^node:${m}$`)
    ]
  }
} satisfies UserConfig
