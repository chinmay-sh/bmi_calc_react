import React from 'react';
import { Table, TableCell,TableBody,TableHead,TableRow,TableContainer,Paper} from '@material-ui/core';
import'./BmiTable.css';

class BmiTable extends React.Component {
  
    render() {

      return (
        <TableContainer component={Paper}>
        <Table aria-label="bmi table">
          <TableHead className="table_color">
            <TableRow>
              <TableCell align="center">BMI Value</TableCell>
              <TableCell align="center">BMI Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                <TableCell align="left">Less than 15</TableCell>
                <TableCell align="center" className="table_yellow">Very Severly Underweight</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Between 15 and 16</TableCell>
                <TableCell align="center" className="table_yellow">Severly Underweight</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Between 16 and 18.5</TableCell>
                <TableCell align="center" className="table_yellow">Underweight</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Between 18.5 and 25</TableCell>
                <TableCell align="center" className="table_green">Normal Healthyweight</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Between 25 and 30</TableCell>
                <TableCell align="center" className="table_yellow">Overweight</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Between 30 and 35</TableCell>
                <TableCell align="center" className="table_red">Moderately Obese</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Between 35 and 40</TableCell>
                <TableCell align="center" className="table_red">Severly Obese</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Over 40</TableCell>
                <TableCell align="center" className="table_red">Very Severly Obese</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      );
    }

}
export default BmiTable;