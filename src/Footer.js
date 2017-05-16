import React, {Component} from 'react';
import './App.css';
let a = "25.00"
let b = "6.45"
let result = parseFloat(a) + parseFloat(b);

class Footer extends Component {


  render() {
    return (
      <div>
          <ul>
            <li>
              ${a}
            </li>
            <li>
              ${b}
            </li>
            Total: ${result};
          </ul>
      </div>
    )
  }
}
export default Footer;
