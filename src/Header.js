import React, {Component} from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
        <div>
          <h1>Hello {this.props.name}</h1>
        </div>
    );
  }
}
export default Header;
