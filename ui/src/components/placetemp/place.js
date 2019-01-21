import React, { Component } from 'react'
import Postdata from '../data/places.json'
import Details from './details'
import Navbar from '../navbar'

class display extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Details id={this.props.match.params.id} />
      </div>
    )
  }
}

export default display
