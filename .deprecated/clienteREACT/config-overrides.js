const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config, env) {
  // Agregar el plugin de NodePolyfill para proporcionar polyfills de Node.js en el lado del cliente
  config.plugins.push(new NodePolyfillPlugin());

  // Configurar Webpack para que 'fs' sea 'empty'
  console.log("React app rewired works!")
    config.resolve.fallback = {
        fs: false
  };

  return config;
};
