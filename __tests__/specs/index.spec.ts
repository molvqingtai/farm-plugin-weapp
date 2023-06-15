import { describe, test } from 'vitest'
import { build } from '@farmfe/core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('Test weapp plugin', () => {
  test('Build weapp', async () => {
    await build({
      configPath: path.resolve(__dirname, '../fixtures/farm.config.ts')
    })
  })
})
