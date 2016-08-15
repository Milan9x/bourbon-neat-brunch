module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },
  plugins: {
  sass: {
    options: {
        mode: 'native'
      , includePaths: [
          'node_modules/bourbon/core'
        , 'node_modules/bourbon-neat/app/assets/stylesheets'
        ]
      // Set the precision for arithmetic operations.
      ,	precision: 8
      // To enable embedded source maps, pass the option `sourceMapEmbed`. This is only supported in _native_ mode; Ruby Sass isn't supported.
      , sourceMapEmbed: true
    }
  }
}
}
