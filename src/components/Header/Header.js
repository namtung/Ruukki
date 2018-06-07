import React, { Component } from "react";
import Logo from './Logo.js'
import Menu from './Menu.js'
class Header extends Component {
  render(){
    return(
        <nav className='navbar navbar-expand-lg navbar-light '>
          <a className="navbar-brand" href="https://www.ruukki.com/b2b" target="_blank">
            <Logo/>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Menu/>

        </nav>
    )
  }
}
export default Header
