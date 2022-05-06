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
        let date = sheet.date.slice(0, 10)
        let year = `${date[0]}${date[1]}${date[2]}${date[3]}`
        let day = `${date[8]}${date[9]}`
        let month = `${date[5]}${date[6]}`
      
        let result = `${day}-${month}-${year}`
        // `${month}.${day}`
        return result
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
            <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  >Дата</TableCell>
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
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
              
            >
              <TableCell component="th" scope="row">
                 
              {dates[index]}
              </TableCell>
              {/* <TableCell align="right">{row.date}</TableCell> */}
              <TableCell align="right">{row.manager}</TableCell>
              <TableCell align="right">{row.numberSets}</TableCell>
              <TableCell align="right">{row.callsOverThirdSek}</TableCell>
              <TableCell align="right">{row.appointment}</TableCell>
              <TableCell align="right">{row.carried}</TableCell>
              <TableCell align="right">{row.checks}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>

        )
   
}

export default GetSheets