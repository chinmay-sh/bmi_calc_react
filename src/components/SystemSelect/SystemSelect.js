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
                
                
            }}>
                <FormControlLabel
                    value="imperial"
                    control={<Radio color="primary" />}
                    label="Imperial"
                    labelPlacement="end"
                    />
                <FormControlLabel
                    value="metric"
                    control={<Radio />}
                    label="Metric"
                    labelPlacement="end"
                    />
            </RadioGroup>
        );
    }
}

export default SystemSelect;