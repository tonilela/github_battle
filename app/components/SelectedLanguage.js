import React from 'react'

const SelectedLanguage = ({handleClick, selectedLang})=>{
  const lang = ['all','js','c#','c++']
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

export default SelectedLanguage