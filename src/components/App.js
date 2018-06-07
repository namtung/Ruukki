import React from 'react'
// import { Switch, Route, Link } from 'react-router-dom'
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import Footer from './Footer.js'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={loading: true}
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000); // simulates an async action, and hides the spinner
  }

  render(){
    let body=<div>
              <div className="container">
                <Header/>
              </div>

              <div className="container-fluid">
                <Body/>
              </div>

              <Footer/>
            </div>
    return(
      this.state.loading ? null : body
    )
  }
}
export default App
