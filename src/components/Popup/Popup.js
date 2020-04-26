import React from 'react';
import {Dialog} from 'react-mdl';

class Popup extends React.Component {
  
    render() {
      return (
        <div>
          <Dialog open={this.props.openDialog} onCancel={this.handleCloseDialog}>
            <DialogTitle>BMI Value</DialogTitle>
            <DialogContent>
              <p>{this.props.bmi_val}</p>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.handleCloseDialog}>OK</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  export default Popup;