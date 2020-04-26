import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Popup extends React.Component {
  
  
    render() {
      return (
          <Dialog open={this.props.openDialog}>
            <DialogTitle>BMI Value</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" align="center">
                {this.props.message()}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button type='button' centerRipple onClick={this.props.onClose}>OK</Button>
            </DialogActions>
          </Dialog>
      );
    }

}
export default Popup;