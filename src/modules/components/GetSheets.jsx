import React from "react"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Get-Sheets.css'
import Statistics from "./Statistics/Statistics";





const GetSheets = (props) => {

    let rows = props.allRows

    let dates = props.allRows.map(sheet => {
        let date = sheet.date.toLocaleDateString()
        return date

    })




    return (
        <>
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
                                sx={{ '&:children td, &:children th': { border: 0.5 } }}

                            >
                                <TableCell className="table-item" sx={{ border: 0.5 }} component="th" scope="row">{dates[index]}</TableCell>
                                {/* <TableCell align="right">{row.date}</TableCell> */}
                                <TableCell className="table-item" sx={{ border: 0.5 }} align="right">{row.manager}</TableCell>
                                <TableCell className="table-item" sx={{ border: 0.5 }} align="right"> {row.numberSets}</TableCell>
                                <TableCell className="table-item" sx={{ border: 0.5 }} align="right"> {row.callsOverThirdSek}</TableCell>
                                <TableCell className="table-item" sx={{ border: 0.5 }} align="right"> {row.appointment}</TableCell>
                                <TableCell className="table-item" sx={{ border: 0.5 }} align="right"> {row.carried}</TableCell>
                                <TableCell className="table-item" sx={{ border: 0.5 }} align="right"> {row.checks}</TableCell>
                                <TableCell className="table-item" sx={{ border: 0.5 }} align="right"> {row.sales}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
           
        </>

    )

}

export default GetSheets