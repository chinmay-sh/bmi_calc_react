import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import OptionButton from '../OptionButton/OptionButton';
import TextField from '../TextField/TextField';
import {Container, Row,Col} from 'react-bootstrap';
import ButtonSubmit from '../Button/Button';

function App() {
  return (
    <div className="App">
      <Container className="container" fluid>
        <h1>Simple BMI Calculator</h1>
        <h5>System : <OptionButton /></h5>
        <Row>
          <Col lg={{span: 10,offset:1}}>
            <TextField preText={`Weight (kgs)`} />
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 10,offset:1}}>
            <TextField preText="Height (inches)" />
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 4,offset:1}}>
            <ButtonSubmit variant="success" text="Calculate" />
          </Col>
          <Col lg={{span: 4,offset:2}}>
            <ButtonSubmit variant="danger" text="RESET" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
