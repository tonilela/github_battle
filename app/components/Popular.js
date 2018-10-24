import React from 'react'
import SelectedLanguage from './SelectedLanguage'
import RepoGrid from './RepoGrid'
import api from '../utils/api'

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLang: 'all',
      repos: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const { selectedLang } = this.state

    this.handleClick(selectedLang)
  }

  handleClick (val) {
    const { selectedLang } = this.state

    this.setState({
      selectedLang: val,
      repos: null
    })

    api.fetchePopularRepos(selectedLang)
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos
          }
        })
      }.bind(this))
  }

  render () {
    const { selectedLang, repos } = this.state
    const { handleClick } = this

    return (
      <div>
        <SelectedLanguage
          selectedLang={selectedLang}
          handleClick={handleClick}
        />
        {!repos ? 'Loading' : <RepoGrid repos={repos} />}
      </div>
    )
  }
}

export default Popular
