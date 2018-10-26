import React, { Component } from 'react'
import queryString from 'query-string'
import api from '../utils/api'
import Player from './Player'
import Loading from './Loading'


class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: [],
      loading: false
    }
  }

  async componentDidMount () {
    await this.setState({
      loading: true
    })
    const { location } = this.props
    const players = queryString.parse(location.search)

    api.battle([
      players.playerOne,
      players.playerTwo
    ]).then((results) => {
      results.map((element) => {
        const NewPlayer = {
          id: element.profile.id,
          name: element.profile.name,
          img: element.profile.avatar_url,
          results: element.score,
          url: element.profile.html_url,
          bio: element.profile.bio,
          publicRepos: element.profile.public_repos,
          followers: element.profile.followers
        }
        this.setState({
          profile: [...this.state.profile, NewPlayer]
        })
      })
    })

    await this.setState({
      loading: false
    })
  }

  render () {
    const { profile, loading } = this.state

    if (loading) {
      return <Loading />
    }

    console.log(profile)

    return (
      <div>
        <ul>
          {
            profile.map((playerData, index) => {
              console.log(playerData, playerData.id,index)
              return (
                <ul key={index}>
                  <Player
                    winner={index ? 'Looser' : 'Winner'}
                    name={playerData.name}
                    img={playerData.img}
                    results={playerData.results}
                    url={playerData.url}
                    bio={playerData.bio}
                    publicRepos={playerData.publicRepos}
                    followers={playerData.followers}
                  />
                </ul>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Results
