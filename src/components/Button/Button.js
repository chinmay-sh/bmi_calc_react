import React from 'react';
import {Button} from 'react-mdl';

export class ButtonPrimary extends React.Component{

    render(){
        return(

            <Button raised primary onClick={this.props.onClick} ripple>{this.props.text}</Button>
            
        );
    }
}

export class ButtonAccent extends React.Component{
    render(){
        return(

            <Button raised accent onClick={this.props.onClick} ripple>{this.props.text}</Button>
            
        );
    }
}