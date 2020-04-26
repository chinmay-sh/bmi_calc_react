import React from 'react';
import {Radio,RadioGroup,FormControlLabel} from '@material-ui/core';

class SystemSelect extends React.Component{

    render(){
        return(
            <RadioGroup row name="system" defaultValue="metric" onChange={(e)=>{
                if(e.target.value === "imperial"){
                    console.log(e.target.value);
                    this.props.onChange(true);
                } else{
                    console.log(e.target.value);
                    this.props.onChange(false);
                }
                
                
            }} style={{justifyContent:"center"}}>
                <FormControlLabel
                    value="imperial"
                    control={<Radio style={{color:"#00b7eb"}} />}
                    label="Imperial"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    value="metric"
                    control={<Radio style={{color:"#ffa500"}} />}
                    label="Metric"
                    labelPlacement="end"
                    />
            </RadioGroup>
        );
    }
}

export default SystemSelect;