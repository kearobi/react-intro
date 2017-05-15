import React, {Component} from 'react';
import './App.css';
var a = "25.00"
var b = "6.45"
var result = parseFloat(a) + parseFloat(b);

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
