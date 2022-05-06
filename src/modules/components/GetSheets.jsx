import React from "react"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Get-Sheets.css'





const GetSheets = (props) => {
   
    let rows = props.allRows
    if(props.currentManager){
        console.log(props.currentManager)
    }
    let dates = props.allRows.map(sheet => {
        let date = sheet.date.slice(5, 10)
        let year = `${date[0]}${date[1]}${date[2]}${date[3]}`
        let day = `${date[8]}${date[9]}`
        let month = `${date[5]}${date[6]}`

        let result = `${day}-${month}-${year}`
        // `${month}.${day}`
        return date
    })


    return (
        <TableContainer component={Paper}>
            <Table className="table" sx={{ minWidth: 10 }} aria-label="simple table">
                <TableHead className="table-head">
                    <TableRow >
                        <TableCell className="table-head-item" align="left" >Дата</TableCell>
                        <TableCell className="table-head-item" align="right">Менеджеры</TableCell>
                        <TableCell className="table-head-item" align="right">наборов номера</TableCell>
                        <TableCell className="table-head-item" align="right">звонки 30 сек. и более</TableCell>
                        <TableCell className="table-head-item" align="right">назначенных презентаций</TableCell>
                        <TableCell className="table-head-item" align="right">проведенных презентаций</TableCell>
                        <TableCell className="table-head-item" align="right">счета</TableCell>
                        <TableCell className="table-head-item" align="right">продажи</TableCell>
 
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (

                        <TableRow
                            className="table-row"
                            key={`${row.date}-${index}`}
                            sx={{ '&:children td, &:children th': { border: 0.5, height: '5px '} }}

                        >
                            <TableCell sx={{ border: 'solid', border: 0.5 }} component="th" scope="row">

                                {dates[index]}
                            </TableCell>
                            {/* <TableCell align="right">{row.date}</TableCell> */}
                            <TableCell  sx={{ border: 'solid', border: 0.5}}  align="right">{row.manager}</TableCell>
                            <TableCell sx={{ border: 'solid', border: 0.5 }} align="right"> {row.numberSets}</TableCell>
                            <TableCell sx={{ border: 'solid', border: 0.5 }} align="right"> {row.callsOverThirdSek}</TableCell>
                            <TableCell sx={{ border: 'solid', border: 0.5 }} align="right"> {row.appointment}</TableCell>
                            <TableCell sx={{ border: 'solid', border: 0.5 }} align="right"> {row.carried}</TableCell>
                            <TableCell sx={{ border: 'solid', border: 0.5 }} align="right"> {row.checks}</TableCell>
                            <TableCell sx={{ border: 'solid', border: 0.5 }} align="right"> {row.sales}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )

}

export default GetSheets