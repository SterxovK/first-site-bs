import React from 'react';
import { Container } from 'react-bootstrap';
import ocean from '../ocean.jpg';
import styled from 'styled-components';


const Styles = styled.div`
  .jumbo {
    background: url(${ocean}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

  }
`;
function Jumbotron() {
  return (
    <Styles>
      <div className="jumbo bg-light p-5 rounded-lg m-3">
        <div className="overlay "></div>
        <Container>
          <h1>Web Developer Blog</h1>
          <p>
            Excepteur nisi occaecat quis cupidatat. Elit duis in Lorem aliqua
            tempor proident culpa ipsum. Aute reprehenderit culpa duis
            consectetur occaecat aute magna adipisicing in. Enim irure quis
            ullamco cillum amet proident et pariatur aute Lorem esse. Duis
            consequat incididunt minim nostrud anim sunt proident ipsum aliquip.
            Excepteur minim mollit esse nulla nostrud ad ut enim proident aute.
            Pariatur consequat nisi eiusmod adipisicing cupidatat qui sunt.
          </p>
        </Container>
      </div>
    </Styles>
  );
}

export default Jumbotron;
