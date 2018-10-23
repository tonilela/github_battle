import React from 'react'
import SelectedLanguage from './SelectedLanguage'

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
    const { selectedLang } = this.state
    const { handleClick } = this
      return(
        <SelectedLanguage 
        selectedLang={selectedLang}
        handleClick={handleClick}
        />  
      )
  }
}

export default Popular