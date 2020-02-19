jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
process.env.PORT = process.env.PORT || 5060

const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

const config = require('./fixture/nuxt.config')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request(url(path))

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    // config.modules.unshift(function () {
    //   // Add test specific test only hooks on nuxt life cycle
    // })

    // Build a fresh nuxt
    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    // Close all opened resources
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
