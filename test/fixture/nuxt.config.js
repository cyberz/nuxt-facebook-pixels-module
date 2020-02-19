const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['@@', {
      pixelId: 'PIXEL_ID_1, PIXEL_ID_2'
    }]
  ],
  babel: {
    presets: [
      'es2015',
      'stage-0'
    ],
    plugins: [
      'transform-runtime'
    ]
  }
}
