import React from 'react';
import {Button} from 'react-bootstrap';


class ButtonSubmit extends React.Component{

    render(){
        return(

            <Button size="lg" variant={this.props.variant}>{this.props.text}</Button>
            
        );
    }
}

export default ButtonSubmit;