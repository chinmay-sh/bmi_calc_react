import React from 'react';
import './App.css';
import SystemSelect from '../SystemSelect/SystemSelect';
import {Grid, Cell} from 'react-mdl';
import TextField from '../TextField/TextField';
import {ButtonPrimary,ButtonAccent} from '../Button/Button';

function App() {
  var props = {
    height: 0,
    weight: 0,
    isImperial: false,
  };

  const updateHeight = function(height) {
    props.height = height;
  }

  const updateWeight = function(weight) {
    props.weight = weight;
  }

  const bmi_calc_metric = function(){
    return props.weight / ((props.height/100) * (props.height/100));
  }
/*
  const bmi_calc_imperial = function(){

  }
*/
  const reset = function(){
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Grid className="heading_grid">
        <Cell col={12} phone={5}><h1>Simple BMI Calculator</h1></Cell>

        <Cell col={4} hidden></Cell>
        <Cell col={1} phone={1} hidden>System: </Cell>
        <Cell col={3} phone={3} hidden> <SystemSelect /></Cell>
        <Cell col={4} hidden></Cell>

        <Cell col={1}><img src="https://img.icons8.com/color/48/000000/weight-light.png"/></Cell>
        <Cell col={5} style={{background:'#fff',borderRadius:10}}>
          <TextField  label="Weight (kgs)" on_change={(e)=>{updateWeight(e.target.value)}}/> 
        </Cell>
        <Cell col={1}><img src="https://img.icons8.com/color/48/000000/height.png"/></Cell>
        <Cell col={5} style={{background:'#fff',borderRadius:10}}>
          <TextField  label="Height (cms)" on_change={(e)=>{updateHeight(e.target.value)}}/> 
        </Cell>

        <Cell col={6}><ButtonPrimary text="Submit" onClick={()=> {alert(`BMI : ${bmi_calc_metric().toFixed(2)}`)}} /></Cell>
        <Cell col={6}><ButtonAccent text="RESET" onClick={reset} /></Cell>
      </Grid>
    </div>

  );
}

export default App;
