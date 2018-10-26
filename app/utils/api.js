const axios = require('axios')

const id = 'YOUR_CLIENT_ID'
const sec = 'YOUR_SECRET_ID'
const params = `?clinent_id=${id}&client_secret=${sec}`

function getProfile (username) {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then((user) => {
      return user.data
    })
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

function getStarCount (repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

function calculateScore (profile, repos) {
  const { followers } = profile
  const totalStars = getStarCount(repos)

  return (followers * 3) + totalStars
}

function handleError (error) {
  console.warn(error)
  return null
}

function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    const profile = data[0]
    const repos = data[1]

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

function sortPlayers (players) {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

function battle (players) {
  return axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
}

function fetchePopularRepos (lang) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>3+language:${lang}'&sort=stars&order=desc&type=Repositories`)

  return axios.get(encodedURI)
    .then((resp) => {
      return resp.data.items
    })
}

module.exports = {
  fetchePopularRepos: fetchePopularRepos,
  battle: battle
}
