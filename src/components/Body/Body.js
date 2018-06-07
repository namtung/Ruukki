import React, { Component } from "react";
class Body extends Component {
  render(){
    return(
      <div>

      <div className="row">
        <div className="col mt-4 ml-2">
          <iframe src="http://namtung.dyndns.org/grafana/d-solo/QCVlUDiRk/ruuvitag3?refresh=1m&orgId=1&panelId=6&theme=light" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
        </div>
        <div className="col mt-4 ml-2">
          <iframe src="http://namtung.dyndns.org/grafana/d-solo/QCVlUDiRk/ruuvitag3?refresh=1m&orgId=1&panelId=4&theme=light" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
        </div>
     </div>

      <div className="row mt-4 ml-2">
        <iframe src="http://namtung.dyndns.org/grafana/d-solo/QCVlUDiRk/ruuvitag3?refresh=1m&orgId=1&panelId=8&theme=light" width="100%" height="300" frameborder="0" scrolling="no"></iframe>
      </div>
      <div className="row mt-4 ml-2 mb-3">
        <iframe src="http://namtung.dyndns.org/grafana/d-solo/QCVlUDiRk/ruuvitag3?refresh=1m&orgId=1&panelId=12&theme=light" width="100%" height="400" frameborder="0"></iframe>
      </div>
    </div>
    )
  }
}
export default Body
