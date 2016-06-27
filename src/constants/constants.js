var APIRoot
if (__DEVELOPMENT__) {
  APIRoot = 'http://localhost:8080'
} else {
  APIRoot = 'ADD_THIS_LATER'
}

module.exports = {
  APIEndpoints: {
    PROJECTS: APIRoot + '/api/vibes',
  }
};
