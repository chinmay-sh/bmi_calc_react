import React from 'react';
import './App.css';
import SystemSelect from '../SystemSelect/SystemSelect';
import {Grid, Cell} from 'react-mdl';
import TextField from '../TextField/TextField';
import {ButtonPrimary,ButtonAccent} from '../Button/Button';
import weightImg from '../../weight.png';
import heightImg from '../../height.png';
import Popup from '../Popup/Popup';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.heightField = React.createRef();
    this.state = {
      height:'',
      weight:'',
      isImperial: false,
      openDialog: false
    }

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);

    this.updateHeight = this.updateHeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);

    this.reset = this.reset.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }  

  updateHeight = function(height) {
    this.setState({
      height: height
    });
    
  }

  updateWeight = function(weight) {
    this.setState({
      weight: weight
    });
  }

  bmi_calc_metric = function(){
    return this.state.weight / ((this.state.height/100) * (this.state.height/100));
  }

  bmi_calc_imperial = function(){
    return (this.state.weight * 703) / ((this.state.height) * (this.state.height));
  }

  reset = function(){
    this.setState({
      height:0,
      weight:0
    });
  }


  render(){
    return (
      <div className="App">
        <Grid className="heading_grid">
          <Cell col={12} phone={5}><h1>Simple BMI Calculator</h1></Cell>
  
          <Cell col={4} hidden></Cell>
          <Cell col={1} phone={1} hidden>System: </Cell>
          <Cell col={3} phone={3} hidden> <SystemSelect /></Cell>
          <Cell col={4} hidden></Cell>
  
          <Cell col={1}><img src={weightImg}/></Cell>
          <Cell col={5} style={{background:'#fff',borderRadius:10}}>
            <TextField label="Weight (kgs)" on_change={this.updateWeight} value={this.state.weight}/> 
          </Cell>
          <Cell col={1}><img src={heightImg}/></Cell>
          <Cell col={5} style={{background:'#fff',borderRadius:10}}>
            <TextField label="Height (cms)" on_change={this.updateHeight} value={this.state.height}/> 
          </Cell>
          <Popup openDialog={this.state.openDialog} bmi_val="5" onClose={this.handleCloseDialog} />
          <Cell col={6}><ButtonPrimary text="Submit" onClick={this.handleOpenDialog} /></Cell>
          <Cell col={6}><ButtonAccent text="RESET" onClick={this.reset} /></Cell>
        </Grid>
      </div>
  
    );
  }
}

export default App;
