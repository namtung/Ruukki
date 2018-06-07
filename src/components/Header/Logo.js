import React, { Component } from "react";
import logo from '../../img/logo3.png';

class Header extends Component {
  render(){
    return(
        <div className="mx-auto">
            <img src={logo} style={{maxWidth: '150px'}} className="img-fluid" alt="Ruukki-logo"/>
        </div>
    )
  }
}
export default Header
