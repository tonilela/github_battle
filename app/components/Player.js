import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ winner, name, img, results, url, bio, publicRepos, followers }) => {
  return (
    <div>
      <div>
        <img src={img} alt='' />
      </div>
      <div>
        <h2>
         Name {name}
        </h2>
        <li>
          {winner}
        </li>
        <li>
          res: {results}
        </li>
        <li>
         url {url}
        </li>
        <li>
         bio {bio}
        </li>
        <li>
         Public repos: {publicRepos}
        </li>
        <li>
          followers {followers}
        </li>
      </div>
    </div>
  )
}

Player.propTypes = {
  winner: PropTypes.string.isRequired,
  name: PropTypes.string,
  img: PropTypes.string.isRequired,
  results: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  publicRepos: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired
}


export default Player
