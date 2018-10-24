import React from 'react'
import PropTypes from 'prop-types'

const SelectedLanguage = ({ handleClick, selectedLang }) => {
  const lang = ['all', 'JavaScript', 'c#', 'c++', 'Go', 'Node']

  return (
    <ul className='lang'>
      {lang.map((language) => {
        return (
          <li
            style={language === selectedLang ? { color: 'red' } : null}
            onClick={handleClick.bind(null, lang)}
            key={language}
          >
            {language}
          </li>
        )
      })}
    </ul>
  )
}

SelectedLanguage.propTypes = {
  handleClick: PropTypes.func.isRequired,
  selectedLang: PropTypes.string.isRequired
}

export default SelectedLanguage
