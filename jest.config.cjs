// Configuration for Jest testing environment
module.exports = {
  // Specifying 'node' as the test environment
  testEnvironment: 'node',

  // Transforming JavaScript files using 'babel-jest'
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};