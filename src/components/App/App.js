import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import OptionButton from '../OptionButton/OptionButton';
import TextField from '../TextField/TextField';
import {Container, Row,Col} from 'react-bootstrap';
import ButtonSubmit from '../Button/Button';
import ChartModal from '../ChartModal/ChartModal';

function App() {
  return (
    <div className="App">
      <Container className="container" fluid>
        <h1>Simple BMI Calculator</h1>

        <Row>
          <Col><h5>System : <OptionButton /></h5></Col>
        </Row>

        <Row>
          <Col lg={{span: 10,offset:1}}>
            <TextField preText={`Weight (kgs)`} />
          </Col>
        </Row>

        <Row>
          <Col lg={{span: 10,offset:1}}>
            <TextField preText={`Height (cms)`} />
          </Col>
        </Row>

        <Row>
          <Col>
            <ButtonSubmit variant="success" text="Calculate" size="lg" />
          </Col>
          <Col>
            <ButtonSubmit variant="danger" text="RESET" size="lg" />
          </Col>
        </Row>

        <Row>
          <Col><ButtonSubmit variant="info" text="BMI CHART" size="md" click={()=>{
            console.log('pressed')
          }} /></Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
