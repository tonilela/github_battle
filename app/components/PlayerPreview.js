import React from 'react'
import PropTypes from 'prop-types'

const PlayerPreview = ({
  playerName,
  playerImg,
  onReset,
  id
}) => {
  return (
    <div>
      <div>
        <img src={playerImg} alt='' />
      </div>
      <div>
        <h2>
          {playerName}
        </h2>
      </div>
      <button onClick={onReset(id)}>
        Reset user
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerImg: PropTypes.string.isRequired,
  onReset: PropTypes.func,
  id: PropTypes.string
}

export default PlayerPreview