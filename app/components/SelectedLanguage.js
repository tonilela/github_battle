import React from 'react'
import PropTypes from 'prop-types' 

const SelectedLanguage = ({handleClick, selectedLang})=>{
  const lang = ['all','JavaScript','c#','c++','Go','Node']
  return(
    <ul className='lang'>
      {lang.map((lang) => {
        return (
          <li 
            style={lang === selectedLang ? {color: 'red'}:null}
            onClick={handleClick.bind(null,lang)} 
            key={lang}>
              {lang}
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