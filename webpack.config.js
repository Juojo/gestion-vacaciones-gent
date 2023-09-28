const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
    return: {
        resolve: {
            fallback: {
                "fs": false,
                "os": false,
                "path": false,
              },
              plugins: [new NodePolyfillPlugin()],
        }
    }
  
}