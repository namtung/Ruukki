import React, { Component } from "react";
class Menu extends Component {
  render(){
    return(
        <div className="collapse navbar-collapse header" id="navbarNav">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li>
              <a className="nav-link items" href="#">dashboard</a>
            </li>
            <li>
              <a className="nav-link items" href="#">Roof sensors</a>
            </li>
            <li>
              <a className="nav-link items active" href="#">additional measurements</a>
            </li>
            <li>
              <a className="nav-link items" href="http://namtung.dyndns.org/grafana/login">grafana</a>
            </li>
          </ul>

        </div>
    )
  }
}
export default Menu
