import { builtinModules } from 'node:module'
import type { UserConfig } from '@farmfe/core'

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
