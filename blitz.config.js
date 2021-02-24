const { sessionMiddleware, simpleRolesIsAuthorized } = require("@blitzjs/server")

const withTM = require('next-transpile-modules')(['@react-three/drei', 'three'])

module.exports = withTM({
  middleware: [
    sessionMiddleware({
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
})