import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PlayerInput extends Component {
  constructor (props) {
    super (props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { value } = e.target

    this.setState({
      username: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    const { handleSubmit, id } = this.props
    const { username } = this.state

    handleSubmit(id, username)
  }

  render () {
    const { label } = this.props
    const { username } = this.state
    const { handleSubmit, handleChange } = this

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <h3>
              {label}
            </h3>
          </label>
          <input
            type='text'
            id='username'
            placeholder='github username'
            value={username}
            onChange={handleChange}
          />
          <button
            type='submit'
            disabled={!username}
          >
            Pretraži
          </button>
        </form>
      </div>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default PlayerInput
