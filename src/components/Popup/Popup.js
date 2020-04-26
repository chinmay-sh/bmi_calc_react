import React from 'react';
import {Dialog,DialogActions,DialogTitle,DialogContent,Button} from 'react-mdl';

class Popup extends React.Component {
  

    render() {
      return (
          <Dialog open={this.props.openDialog}>
            <DialogTitle>BMI Value</DialogTitle>
            <DialogContent>
              <p>{this.props.bmi_val}</p>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.props.onClose}>OK</Button>
            </DialogActions>
          </Dialog>
      );
    }

}
export default Popup;