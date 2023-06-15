import { type JsPlugin } from '@farmfe/core'

const farmPluginWeapp = (): JsPlugin => {
  return {
    name: 'farm-plugin-weapp',
    load: {
      filters: {
        resolvedPaths: ['^app.json$']
      },
      executor(params, ctx, hookContext) {
        const { resolvedPath } = params
        console.log(resolvedPath)

        return {
          content: '',
          moduleType: 'json'
        }
      }
    }
  }
}

export default farmPluginWeapp
