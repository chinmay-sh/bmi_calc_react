import React from 'react';
import {Dropdown,Button,ButtonGroup} from 'react-bootstrap';


class OptionButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isImperial: false
        }
      }

    render(){
        return(
            <Dropdown as={ButtonGroup}>
                <Button variant="primary" disabled>{this.state.isImperial ? `Imperial`:`Metric`}</Button>

                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Imperial</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Metric</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default OptionButton;