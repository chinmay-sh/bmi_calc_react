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
      weightLabel: 'Weight (kgs)',
      heightLabel: 'Height (cms)',
      isImperial: false,
      openDialog: false
    }

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);

    this.updateHeight = this.updateHeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);

    this.reset = this.reset.bind(this);

    this.popMessage = this.popMessage.bind(this);
    this.handleSystemChange = this.handleSystemChange.bind(this);
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

  popMessage(){
    var bmi;
    if (this.state.isImperial){
      bmi = `BMI: ${this.bmi_calc_imperial().toFixed(2)}`;
    } else{
      bmi = `BMI: ${this.bmi_calc_metric().toFixed(2)}`;
    }
    return bmi;
  }

  handleSystemChange(imperial){
    console.log(`imperial: ${imperial}`)
    if(imperial){
      this.setState({
        weightLabel: "Weight (lbs)",
        heightLabel: "Height (ins)",
        isImperial: imperial
      });
    } else{
      this.setState({
        weightLabel: "Weight (kgs)",
        heightLabel: "Height (cms)",
        isImperial: imperial
      });
    }
  }


  render(){

    return (
      <div className="App">
        <Grid className="heading_grid">
          <Cell col={12} phone={5}><h2>Simple BMI Calculator</h2></Cell>
  
          <Cell col={3}></Cell>
          <Cell col={2} phone={2} style={{alignSelf:"center"}}>System: </Cell>
          <Cell col={3} phone={3}><SystemSelect onChange={this.handleSystemChange} /></Cell>
          <Cell col={4}></Cell>
  
          <Cell col={1}><img src={weightImg}/></Cell>
          <Cell col={5} style={{background:'#fff',borderRadius:10}}>
            <TextField label={this.state.weightLabel} on_change={this.updateWeight} value={this.state.weight}/> 
          </Cell>
          <Cell col={1}><img src={heightImg}/></Cell>
          <Cell col={5} style={{background:'#fff',borderRadius:10}}>
            <TextField label={this.state.heightLabel} on_change={this.updateHeight} value={this.state.height}/> 
          </Cell>
          <Popup openDialog={this.state.openDialog} message={this.popMessage} onClose={this.handleCloseDialog} />
          <Cell col={6}><ButtonPrimary text="Submit" onClick={this.handleOpenDialog} /></Cell>
          <Cell col={6}><ButtonAccent text="RESET" onClick={this.reset} /></Cell>
        </Grid>
      </div>
  
    );
  }
}

export default App;
