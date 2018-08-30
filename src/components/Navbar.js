import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
              <ul>
                  <li>Home</li>
                  <li>About Me</li>
                  <li>Resume</li>
                  <li>Portfolio</li>
              </ul>
              <hr></hr>
            </nav>
        )
    }
}

export default Navbar;