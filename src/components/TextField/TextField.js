import React from 'react';
import {Textfield} from 'react-mdl';

class TextField extends React.Component{
    
    render(){
        return(
            <div>
                <Textfield
                    onChange={this.props.on_change}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label={this.props.label}
                    floatingLabel
                    style={{width: '90%',color:'#000'}}
                />
            </div>
            
        );
    }
}

export default TextField;