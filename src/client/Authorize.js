import React from "react";
import "./app.css";
import 'bulma/css/bulma.css';
import { Section } from 'bloomer';

const Authorize = props => {
  return (
    <div className="bg">
    <img src={require("./green.png")} />
    <Section>
    <div className="lamp">
      <div className="lamptext">
        <p className="intro"><strong>Hi, I&apos;m Geney!</strong></p>
         My job is to look into your genome and help you discover activities
        that you have a natural inclination for. Based on your genetic predispositions, I can help you
        find meetups going on in your neighborhood centered around activities that you are likely to enjoy <em>AND</em> be good at!
        Who knows, you may just discover your new favorite hobby and meet some awesome people who share your passions along the way!
        <br/>
        Let&apos;s get started &mdash; connect with your genome to begin!
         <br/> <br/>
          <span className="click">
            <a href={props.link}>Connect with Genome</a>
          </span>
        </div>
      </div>
    </Section>
    </div>

  )
}

export default Authorize
