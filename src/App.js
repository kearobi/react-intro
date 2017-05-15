import React, { Component } from 'react';
import logo from './logo.svg';
import img from './headerimg.jpg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Recipies from './Recipies'
import Booking from './Booking'
import { Grid, Navbar, Jumbotron, Button, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="application">
      <Navbar fixedTop>
        <Grid>
            <Navbar.Header>
            <Navbar.Brand>

              <a href="/">MENU</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
      <Jumbotron id="jc">
        <Grid>
        <ul>
          <h1 id="title"> Brownz'd </h1>
          <h2 id="tag">Get Your Brown On</h2>
          {/* <img src={img} /> */}
        </ul>
          {/* <p>
            <Button id="butts"
              bsStyle="success"
              bsSize="small"
              href="http://react-bootstrap.github.io/components.html"
              target="_blank">
              View React Bootstrap Docs
            </Button>
          </p> */}
        </Grid>
      </Jumbotron>
        <div>
          <Header name="Keaton" />
        </div>
        <div>
          <h4>Appointments:</h4>
          <Recipies />
        </div>
        <div>
          <h4>Gift Cards:</h4>
          <Footer name="Keaton.R" />
        </div>
        <div>
          <button><a href="https://www.appointmentquest.com/appointment-scheduling-for/beauty/tanning-salon">Button Text</a></button>
          <Booking/>
        </div>
    </div>
    );
  }
}



export default App;
