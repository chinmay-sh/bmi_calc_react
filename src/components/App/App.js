import React from 'react';
import './App.css';
import SystemSelect from '../SystemSelect/SystemSelect';
import {Grid, Cell,Button} from 'react-mdl';
import TextField from '../TextField/TextField';
import {ButtonPrimary,ButtonAccent} from '../Button/Button';
import weightImg from '../../weight.png';
import heightImg from '../../height.png';
import Popup from '../Popup/Popup';
import BmiTable from '../BmiTable/BmiTable';
import logo from '../../logo.svg';

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
      openDialog: false,
      openChartDialog: false
    }

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);

    this.handleChartOpenDialog = this.handleChartOpenDialog.bind(this);
    this.handleChartCloseDialog = this.handleChartCloseDialog.bind(this);

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

  handleChartOpenDialog() {
    this.setState({
      openChartDialog: true
    });
  }

  handleChartCloseDialog() {
    this.setState({
      openChartDialog: false
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
      height:'',
      weight:''
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

  popChartMessage(){
    return <BmiTable />;
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
          <Cell col={12} phone={1}><a href="https://the-redlord.github.io/"><img src={logo} height="110" width="110" /></a></Cell>
          <Cell col={12} phone={3} tablet={8}><h2>BMI Calculator</h2></Cell>
          <Cell col={12} phone={4} tablet={8}><Popup className="chartpop" openDialog={this.state.openChartDialog} 
            message={this.popChartMessage} 
            onClose={this.handleChartCloseDialog} title="BMI CHART" />
            <Button style={{color:"#1eff00"}} raised ripple onClick={this.handleChartOpenDialog}>
              BMI CHART
            </Button>
          </Cell>

          <Cell col={4} phone={4} tablet={2}></Cell>
          <Cell col={2} phone={1} tablet={2} style={{alignSelf:"center"}}>System: </Cell>
          <Cell col={3} phone={3} tablet={3}><SystemSelect onChange={this.handleSystemChange} /></Cell>
          <Cell col={3} phone={4} tablet={1}></Cell>
  
          <Cell col={1} phone={1} tablet={1}><img src={weightImg}/></Cell>
          <Cell col={5} phone={3} tablet={7} style={{background:'#fff',borderRadius:10}}>
            <TextField label={this.state.weightLabel} on_change={this.updateWeight} value={this.state.weight}/> 
          </Cell>
          <Cell col={1} phone={1} tablet={1}><img src={heightImg}/></Cell>
          <Cell col={5} phone={3} tablet={7} style={{background:'#fff',borderRadius:10}}>
            <TextField label={this.state.heightLabel} on_change={this.updateHeight} value={this.state.height}/> 
          </Cell>
          <Popup openDialog={this.state.openDialog} title="BMI VALUE" message={this.popMessage} onClose={this.handleCloseDialog} />
          <Cell col={12} phone={4} tablet={8}></Cell>
          <Cell col={6} phone={2} tablet={8}><ButtonPrimary text="Submit" onClick={this.handleOpenDialog} /></Cell>
          <Cell col={6} phone={2} tablet={8}><ButtonAccent text="RESET" onClick={this.reset} /></Cell>
        </Grid>
      </div>
  
    );
  }
}

export default App;
