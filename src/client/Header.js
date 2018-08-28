import React from 'react';
import 'bulma/css/bulma.css';
import styled from 'styled-components';
import { Hero, HeroBody, Container, Title, Section } from 'bloomer';
import "./app.css";


const Header = props => {
  return(
    <Hero isFullHeight className="header">
      <HeroBody className="mid">
        <Container hasTextAlign='centered'>
            <h1 className="name">Geney</h1>
            <div className="subtitle">Use your genome to discover a new hobby</div>
        </Container>
      </HeroBody>

    </Hero>
  )
}

export default Header;
