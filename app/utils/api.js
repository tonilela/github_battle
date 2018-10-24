var axios = require('axios')

module.exports = {
  fetchePopularRepos: function(lang){  
    var encodedURI =  window.encodeURI('https://api.github.com/search/repositories?q=stars:>3+language:'+ lang + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function(resp){
          return resp.data.items
      })
  }
}