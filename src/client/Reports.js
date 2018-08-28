import React, { Component } from "react";
import "./app.css";
import 'bulma/css/bulma.css';
import { Section } from 'bloomer';
import ReportCard from './ReportCard';
import fetchJsonp from 'fetch-jsonp';


export default class Reports extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      'alcohol-drinking-behavior': null,
      'caffeine-consumption': null,
      'conscientiousness': null,
      'depression': null,
      'endurance-performance': null,
      'extraversion': null,
      'hearing-function': null,
      'mathematical-ability': null,
      'novelty-seeking': null,
      'openness': null,
      'reading-and-spelling-ability': null,
      'word-reading-ability': null
    }
  }

  getData = (name, link, lat, lon) => {
    const newUrl = link + '&lat=' + String(lat) + '&lon=' + String(lon)
     fetchJsonp(newUrl)
    .then(response => {
      return response.json()
    }).then( json  => {
      console.log('parsed json for ', name , json)
      this.setState({[name]: json.results})
      console.log(this.state)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  componentDidMount() {
    var dict = {};
    dict['alcohol-drinking-behavior'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=10&desc=False&status=upcoming&sig_id=261174660&sig=9c5f72ea5d7d5dafd7c54c2e4f10d7921296720d";
    dict['caffeine-consumption'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&topic=coffee&photo-host=public&page=5&radius=25.0&category=10&desc=False&status=upcoming&sig_id=261174660&sig=9c5f72ea5d7d5dafd7c54c2e4f10d7921296720d";
    dict['conscientiousness'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=13&desc=False&status=upcoming&sig_id=261174660&sig=06681bba75cefa6f7d1762a5553ac7a8f5fdb85c";
    dict['depression'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&topic=depression&photo-host=public&page=5&radius=25.0&desc=False&status=upcoming&sig_id=261174660&sig=20eada7a219d6446c0961a18d79231c5eecfabba";
    dict['endurance-performance'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=9&desc=False&status=upcoming&sig_id=261174660&sig=2c6f4b954f866dcf7901fa41e8c5a3300a59ac0c";
    dict['extraversion'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=31&desc=False&status=upcoming&sig_id=261174660&sig=1dc8873dc5b45eff65d2644dd7203857dec8ff26";
    dict['hearing-function'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=21&desc=False&status=upcoming&sig_id=261174660&sig=432bf959f827195bac08ce4d18fbdd473787ffb9";
    dict['mathematical-ability'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=6&desc=False&status=upcoming&sig_id=261174660&sig=4e5fe25f1b5d37ff0db78707a46187d906770d54";
    dict['novelty-seeking'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=23&desc=False&status=upcoming&sig_id=261174660&sig=22ae4409c81b2adef5219dda2879827430e80a2d";
    dict['openness'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=28&desc=False&status=upcoming&sig_id=261174660&sig=93971353f823c3b48df63790de5a1d528b636720";
    dict['reading-and-spelling-ability'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=36&desc=False&status=upcoming&sig_id=261174660&sig=0732e52a0ad3c66a251b266f9ed11975a96c2eab";
    dict['word-reading-ability'] = "https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=5&radius=25.0&category=18&desc=False&status=upcoming&sig_id=261174660&sig=197ec836fcdc34a6b2b23a9b06397c262d9b67c4";

    this.props.reports.forEach(report => {
      if (report._data.summary.score > 1) {
            this.getData(report._data.phenotype.url_name, dict[report._data.phenotype.url_name], this.props.lat, this.props.lon)
          }
        })
  }

  render() {
    return (
      <div className="bg">
      <img src={require("./green.png")} />
      <Section>
        <div>On a scale of <strong>1-5</strong>, we rated your tendency towards each of these traits. For ones where you scored a <strong>3</strong> or above,
        we have gathered a list of some meetups in your neighborhood that you might like to check out! </div>

      <div>
        {this.props.reports.map((r) =>
          <div>
          {this.state[r._data.phenotype.url_name] &&
            <ReportCard report={r} results={this.state[r._data.phenotype.url_name]}/>
          }
          </div>
        )}


      </div>
      </Section>
      </div>

    )
  }
}
