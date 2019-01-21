import React, { Component } from 'react'
import Post from './placetemp/place'
import Details from './placetemp/details'
import Navbar from './navbar'
import Home from './home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/place/:id' component={Post} />

          </div>
        </Router>
      </div>
    )
  }
}

export default App
