import React, { Component } from 'react'
import Postdata from '../data/places.json'
import Maps from './maps'
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView,
  MDBMask
} from 'mdbreact'
import './index.css'
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact'

class details extends Component {
  render () {
    var key = parseInt(this.props.id, 10)
    return (
      <div>
        {Postdata.map((postdetail, index) => {
          if (postdetail.id === key) {
            return <div>
              <MDBView>
                <div className='bg1' />
                <MDBMask overlay='white-light' className='flex-center'>

                  <MDBContainer>
                    <Col style={{ maxWidth: '22rem' }}>
                      <Card>
                        <CardImage className='img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/8/80/Beas_River%2C_Kullu_Valley.jpg' waves />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                          <Button href='#'>Button</Button>
                        </CardBody>
                      </Card>
                    </Col>                </MDBContainer>

                </MDBMask>
              </MDBView>
              <ul>
                <li>{postdetail.title}</li>
                <li>{postdetail.content}</li>
                <li>{postdetail.distance}</li>
                <li>{postdetail.stay}</li>
              </ul>
              <Maps />
            </div>
          }
        })}
      </div>
    )
  }
}
export default details
