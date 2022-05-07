import TableTotal from "./Table-Total"
import {
    connect
} from "react-redux"

const mapStateToProps = (state) => {
    
    let rows = state.sheets.showRows
    let dates = ''
    let managers = ''
    let numberSets = 0
    let callsOverThirdSek = 0
    let appointment = 0
    let carried = 0
    let checks = 0
    let sales = 0
    if (rows.length > 0) {
        dates = `c ${rows[0].date.slice(5, 10)}  ${rows[0].date.slice(0, 4)}
        по ${rows[rows.length - 1].date.slice(5, 10)} ${rows[rows.length - 1].date.slice(0, 4)}`

        managers = [...new Set(rows.map(row => (row.manager)))].join(', ')
debugger
        rows.forEach(row => {
            numberSets += Number(row.numberSets)
            callsOverThirdSek += Number(row.callsOverThirdSek)
            appointment += Number(row.appointment)
            appointment += Number(row.appointment)
            carried += Number(row.carried)
            checks += Number(row.checks)
            sales += Number(row.sales)
        })


    }



    return {
        showRows: state.sheets.showRows,
        dates: dates,
        managers: managers,
        numberSets: numberSets,
        callsOverThirdSek: callsOverThirdSek,
        appointment: appointment,
        carried: carried,
        checks:checks, 
        sales:sales
    }
}

export const TableTotalContainer = connect(mapStateToProps)(TableTotal)