import React from 'react';
import Slider from './Components/Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ocean from './ocean.jpg';
import Jumbotron from './Components/Jumbotron';

export default function Home() {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ocean} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Cillum excepteur aliquip mollit aute cillum et asse labore.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ocean} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Cillum excepteur aliquip mollit aute cillum et asse labore.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ocean} />
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Cillum excepteur aliquip mollit aute cillum et asse labore.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
      <Container style= {{marginBottom: '30px'}}>
        <Row>
          <Col md={7}>
            <img src={ocean} height={400} alt="ocean" />
          </Col>
          <Col md={5}>
            <h2>Web Developer blog</h2>
            <p>
              Excepteur nisi occaecat quis cupidatat. Elit duis in Lorem aliqua
              tempor proident culpa ipsum. Aute reprehenderit culpa duis
              consectetur occaecat aute magna adipisicing in. Enim irure quis
              ullamco cillum amet proident et pariatur aute Lorem esse. Duis
              consequat incididunt minim nostrud anim sunt proident ipsum
              aliquip. Excepteur minim mollit esse nulla nostrud ad ut enim
              proident aute. Pariatur consequat nisi eiusmod adipisicing
              cupidatat qui sunt.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
