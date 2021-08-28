// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPwa = require('next-pwa')

//module export with next-pwa
module.exports = withPwa({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
})

module.exports = {
  reactStrictMode: true
}
