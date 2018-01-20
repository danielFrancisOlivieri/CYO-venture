import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Card,
  Modal,
  Statistic,
  Visibility,
} from 'semantic-ui-react'

import {
  Tooltip,
} from 'react-tippy';

import './App.css'

import { connect } from 'react-firebase'

firebase.initializeApp({
  databaseURL: 'https://venture-34bcf.firebaseio.com/'
})



const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>


        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em'  }}
            vertical
          >


            <Container text style={{color: '#D14F43'}} >
              <Header
                as='h1'
                content='Adventure'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '.5em' }}
              />
              <Segment.Group class="mainGroup">
              <Image class="mainImage" src='http://originalmagicart.com/newsite/wp-content/uploads/2015/07/160285_-_Enthralling_Victor-1024x748.jpg' />

              <Segment class="mainSegment" >
                <p> The Enthralling Victor saunters forth. </p>
              </Segment>
              </Segment.Group>

            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '3em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row centered>
<center>
            <Card.Group style={{textAlign: 'left' }}>
                <Card color='black'>
                  <Card.Content>

                  <Grid columns='equal'>
                  <Grid.Row>
                  <Grid.Column>
                    <Card.Header style={{fontSize: "1.5em"}} >
                    <strong>  Attack </strong>
                    </Card.Header>
                    </Grid.Column>

                    <Grid.Column >

                      <i class="ra ra-sword ra-lg" style={{ float: 'right' }}  ></i>
                      </Grid.Column>
                    </Grid.Row>
                    </Grid>


                    <Card.Meta>
                    <p>  Increases your Violence </p>
                    </Card.Meta>
                    <Card.Description>
                      Draw your dagger and stab them in the gut.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Choose</Button>
                    </div>
                  </Card.Content>
                </Card>

                <Card color='black'>
                  <Card.Content>

                  <Grid columns='equal'>
                  <Grid.Row>
                  <Grid.Column>
                    <Card.Header style={{fontSize: "1.5em"}} >
                    <strong>  Talk </strong>
                    </Card.Header>
                    </Grid.Column>

                    <Grid.Column >

                      <i class="ra ra-scroll-unfurled ra-lg" style={{ float: 'right' }}  ></i>
                      </Grid.Column>
                    </Grid.Row>
                    </Grid>

                    <Card.Meta>
                      Increases your Diplomacy
                    </Card.Meta>
                    <Card.Description>
                      Begin a conversation.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Choose</Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card color='black'>
                  <Card.Content>

                  <Grid columns='equal'>
                  <Grid.Row>
                  <Grid.Column>
                    <Card.Header style={{fontSize: "1.5em"}} >
                    <strong>  Escape </strong>
                    </Card.Header>
                    </Grid.Column>

                    <Grid.Column >

                      <i class="ra ra-nuclear ra-lg" style={{ float: 'right' }}  ></i>
                      </Grid.Column>
                    </Grid.Row>
                    </Grid>

                    <Card.Meta>
                      Increases your Stealth
                    </Card.Meta>
                    <Card.Description>
                      Scamper away down the hill.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Choose</Button>
                    </div>
                  </Card.Content>
                </Card>


              </Card.Group>

</center>
            </Grid.Row>
            <Grid.Row>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '2em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Character Stats</a>
            </Divider>
</Grid.Row>

<Grid.Row centered>

<Segment.Group horizontal>

   <Segment><Statistic>
       <Statistic.Value>0</Statistic.Value>
       <Statistic.Label><i class="ra ra-sword ra-3x"></i></Statistic.Label>

     </Statistic></Segment>


   <Segment><Statistic>
     <Statistic.Value>0</Statistic.Value>
     <Statistic.Label><i class="ra ra-scroll-unfurled ra-3x"></i></Statistic.Label>

   </Statistic></Segment>
   <Segment><Statistic>
     <Statistic.Value>0</Statistic.Value>
     <Statistic.Label><i class="ra ra-nuclear ra-3x"></i></Statistic.Label>
   </Statistic></Segment>
 </Segment.Group>


            </Grid.Row>
          </Grid>



        </Segment>


      </div>
    )
  }
}
