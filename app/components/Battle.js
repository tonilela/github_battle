import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'

class Battle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playerOne: '',
      playerTwo: '',
      playerOneImg: null,
      playerTwoImg: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(() => {
      const newState = {}
      newState[id] = username
      newState[`${id}Img`] = `https://github.com/${username}.png?size=200`
      return newState
    })
  }

  onReset (id) {
    return () => {
      this.setState({
        [id]: '',
        [`${id}Img`]: null
      })
    }
  }

  render () {
    const { handleSubmit, onReset } = this
    const {
      playerOne,
      playerTwo,
      playerOneImg,
      playerTwoImg
    } = this.state
    const { match } = this.props

    return (
      <div>
        <div className='row'>
          {!playerOne
          ?
          <PlayerInput
            id='playerOne'
            label='Player One'
            handleSubmit={handleSubmit}
          /> :
          <PlayerPreview
            playerName={playerOne}
            playerImg={playerOneImg}
            onReset={onReset}
            id='playerOne'
          />
          }
          {!playerTwo
          ?
          <PlayerInput
            id='playerTwo'
            label='Player Two'
            handleSubmit={handleSubmit}
          /> :
          <PlayerPreview
            playerName={playerTwo}
            playerImg={playerTwoImg}
            onReset={onReset}
            id='playerTwo'
          />}
        </div>
        <div>
          {playerOneImg && playerTwoImg &&
            <Link
              className='button'
              to={{
                pathname: `${match.url}/results`,
                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
              }}
            >
              Battle
            </Link>
          }
        </div>
      </div>
    )
  }
}

export default Battle