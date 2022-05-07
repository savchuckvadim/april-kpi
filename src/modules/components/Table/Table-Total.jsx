
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table-Total.css'
const TableTotal = (props) => {
    
    let dates = props.dates
    let managers = props.managers
    let numberSets = props.numberSets
    let callsOverThirdSek = props.callsOverThirdSek
    let appointment = props.appointment
    let carried = props.carried
    let checks = props.checks
    let sales = props.sales
    return (
        <TableContainer component={Paper} className='total-table'>
            <Table className='total-table' sx={{ minWidth: 20 }} aria-label="simple table">
                <TableHead >
                    <TableRow sx={{ border: 0.5 }} >
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="left" >Дата</TableCell>
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="right">Менеджеры</TableCell>
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="right">наборов номера</TableCell>
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="right">звонки 30 сек. и более</TableCell>
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="right">назначенных презентаций</TableCell>
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="right">проведенных презентаций</TableCell>
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="right">счета</TableCell>
                        <TableCell sx={{ border: 0.5 }} className="total-table-head-item" align="right">продажи</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>


                    <TableRow
                        className="totalTable-row"
                        key={`123`}
                        sx={{ '&:children td, &:children th': { border: 0.5 } }}

                    >
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} component="th" scope="row">

                            {dates}

                        </TableCell>
                        {/* <TableCell align="right">{row.date}</TableCell> */}
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} align="right">{managers}</TableCell>
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} align="right"> {numberSets}</TableCell>
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} align="right"> {callsOverThirdSek}</TableCell>
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} align="right"> {appointment}</TableCell>
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} align="right"> {carried}</TableCell>
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} align="right"> {checks}</TableCell>
                        <TableCell className="total-table-head-item" sx={{ border: 0.5 }} align="right"> {sales}</TableCell>

                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableTotal