// default webpack file preprocessor is good for simple cases
// Required to temporarily patch async components, chunking, and inline image loadin
const {
  onFileDefaultPreprocessor,
} = require('cypress-vue-unit-test/dist/preprocessor/webpack')

module.exports = (on, config) => {
  on('file:preprocessor', onFileDefaultPreprocessor(config))
  require('@cypress/code-coverage/task')(on, config)

  return config
}
