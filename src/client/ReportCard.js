import React, { Component } from "react";
import "./app.css";
import styled from 'styled-components';
import EventCard from './EventCard';


const Title = styled.div`
  font-size: 1.5em;
  text-align: left;
  margin: 5px auto;
  margin-top: 55px;
  width: 90%;
`
const Number = styled.span`
  font-weight: bold;
`
const ReportCard = props => {
  return (
    <div>
    <Title>Because you scored a <Number>{props.report._data.summary.score + 1}</Number> in {props.report._data.phenotype.display_name}...</Title>
    <div className="scrolling-wrapper">
    {props.results.map((result) =>
      <EventCard name={result.name} image={result.photo_url} date={new Date(result.time)} event_url={result.event_url} />
    )}
    </div>
    </div>
  )
}

export default ReportCard;
