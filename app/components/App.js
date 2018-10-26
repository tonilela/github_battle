import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Nav from './Nav'
import Popular from './Popular'
import Home from './Home'
import Battle from './Battle'
import Page404 from './Page404'
import Results from './Results'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='popular'>
          <Nav />
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              path='/popular'
              component={Popular}
            />
            <Route
              exact
              path='/battle'
              component={Battle}
            />
            <Route
              path='/battle/results'
              component={Results}
            />
            <Route
              component={Page404}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
