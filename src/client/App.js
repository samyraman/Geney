import React, { Component } from "react";
import "./app.css";
import Header from './Header'
import Authorize from './Authorize'
import Reports from './Reports'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorize: null,
      reports: null,
      lat: 40.772309899999996,
      lon: -73.9496494

     };
  }

  componentDidMount() {
    fetch("/api/getreports")
      .then(res => res.json())
      .then(data => this.setState({ authorize: data.authorize_url, reports: data.reports }));
    this.getLocation()
  }

  getLocation = () => {
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.success, this.error)
      }
  }

success = position => {
  this.setState({
     lat: position.coords.latitude,
     lon: position.coords.longitude,
  })
}

error = error => {
  console.log('ERROR' + error.code + ': ' + error.message)
}

  render() {
    return (
      <div>
        <Header />

        {this.state.reports && (this.state.reports.length > 0) ? (
          <Reports reports={this.state.reports} lat={this.state.lat} lon={this.state.lon} />
        ) : (
          <Authorize link={this.state.authorize}/>
        )}
      </div>
    );
  }
}
