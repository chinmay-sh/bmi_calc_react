import React from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';


class TextField extends React.Component{

    render(){
        return(

            <InputGroup size="md" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">{this.props.preText}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            
        );
    }
}

export default TextField;