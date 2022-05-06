import React from "react"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





const GetSheets =(props) => {
    let rows = props.sheets
    let dates = props.sheets.map(sheet => {
        let date = sheet.date.slice(5, 10)
        let year = `${date[0]}${date[1]}${date[2]}${date[3]}`
        let day = `${date[8]}${date[9]}`
        let month = `${date[5]}${date[6]}`
      
        let result = `${day}-${month}-${year}`
        // `${month}.${day}`
        return date
    })
    // componentDidMount() {
    //     // getAllSheets()
        
    //     this.names = this.props.sheets.map(data => (data.manager))

    // }
    // componentDidUpdate(){
    //     this.names = this.props.sheets.map(data => (data.manager))
    // }
  
        return (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 10 }} aria-label="simple table">
        <TableHead>
          <TableRow className="table-row">
            <TableCell align="left" >Дата</TableCell>
            <TableCell align="right">Менеджеры</TableCell>
            <TableCell align="right">наборов номера</TableCell>
            <TableCell align="right">звонки 30 сек. и более</TableCell>
            <TableCell align="right">назначенных презентаций</TableCell>
            <TableCell align="right">проведенных презентаций</TableCell>
            <TableCell align="right">счета</TableCell>
            <TableCell align="right">продажи</TableCell>
            	
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
              
            <TableRow
              key={`${row.date}-${index}`}
              sx={{ '&:children td, &:children th': { border: 0.5 } }}
              
            >
              <TableCell component="th" scope="row">
                 
              {dates[index]}
              </TableCell>
              {/* <TableCell align="right">{row.date}</TableCell> */}
              <TableCell sx={{border:'solid', border:0.5}} align="right">{row.manager}</TableCell>
              <TableCell sx={{border:'solid', border:0.5}} align="right">{row.numberSets}</TableCell>
              <TableCell sx={{border:'solid', border:0.5}} align="right">{row.callsOverThirdSek}</TableCell>
              <TableCell sx={{border:'solid', border:0.5}} align="right">{row.appointment}</TableCell>
              <TableCell sx={{border:'solid', border:0.5}} align="right">{row.carried}</TableCell>
              <TableCell sx={{border:'solid', border:0.5}} align="right">{row.checks}</TableCell>
              <TableCell sx={{border:'solid', border:0.5}} align="right">{row.sales}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>

        )
   
}

export default GetSheets