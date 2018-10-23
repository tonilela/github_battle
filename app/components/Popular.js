import React from 'react'


class Popular extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedLang: 'all'
    }
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(val){
    this.setState({
      selectedLang: val
    })
  }
  render(){
    const lang = ['all','js','c#','c++']
    const { selectedLang } = this.state
    const { handleClick } = this
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
}

export default Popular