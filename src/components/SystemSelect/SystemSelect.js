import React from 'react';
import {Radio,RadioGroup} from 'react-mdl';

class SystemSelect extends React.Component{

    render(){
        return(
            <RadioGroup name="system" value="metric" disabled>
                <Radio value="imperial" ripple>Imperial</Radio>
                <Radio value="metric">Metric</Radio>
            </RadioGroup>
        );
    }
}

export default SystemSelect;