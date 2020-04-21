import React from 'react';
import {Button} from 'react-bootstrap';


class ButtonSubmit extends React.Component{

    render(){
        return(

            <Button size={this.props.size} className="mb-4" variant={this.props.variant} onClick={this.props.click}>{this.props.text}</Button>
            
        );
    }
}

export default ButtonSubmit;