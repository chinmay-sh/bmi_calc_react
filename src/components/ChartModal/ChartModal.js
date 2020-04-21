import React from 'react';
import {Modal} from 'react-bootstrap';

class ChartModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            activeModal: ''
        }

        this.modalDisplay = this.modalDisplay.bind(this);
    }
    

    render(){
        return(
            <div>
                
            </div>
        );
    }
}

export default ChartModal;