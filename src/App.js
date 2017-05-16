import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import RecipeDetail from './RecipeDetail'
import Header from './Header';
import Footer from './Footer';
import RecipeIndex from './RecipeIndex';
import Booking from './Booking';
import recipesStore from './store/recipes';
import { Grid, Navbar, Jumbotron, Button, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      recipes: recipesStore
    }
  }
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
        </ul>
        </Grid>
      </Jumbotron>
        <Router>
        <div>
          <Header name="Keaton" />
          <Link to={`/appointments`} >
            <h3>Book Appointment:</h3>
          </Link>
            <Route exact path="/" />
            <Route path="/appointments" component={RecipeIndex} />
            <Route path='/recipes/:id' component={RecipeDetail} />
        </div>
        </Router>
        <Router>
        <div>
          <Link to={`/giftcards`} >
            <h3>Gift Card:</h3>
          </Link>
          <Route path="/giftcards" component={Footer} />
        </div>
        </Router>
        <div>
          <button><a href="/">Button Text</a></button>
          <Booking/>
        </div>

    </div>
    );
  }
}



export default App;
