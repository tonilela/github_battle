const axios = require('axios')

function fetchePopularRepos (lang) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>3+language:${lang}'&sort=stars&order=desc&type=Repositories`)

  return axios.get(encodedURI)
    .then((resp) => {
      return resp.data.items
    })
}

module.exports = {
  fetchePopularRepos: fetchePopularRepos
}
