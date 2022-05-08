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

        dates = `c ${rows[0].date.toLocaleDateString()} 
        по ${rows[rows.length - 1].date.toLocaleDateString()} `

        managers = [...new Set(rows.map(row => (row.manager)))].join(', ')

        rows.forEach(row => {
            numberSets += row.numberSets
            callsOverThirdSek += row.callsOverThirdSek
            appointment += row.appointment
           
            carried += row.carried
            checks += row.checks
            sales += row.sales
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
        checks: checks,
        sales: sales
    }
}

export const TableTotalContainer = connect(mapStateToProps)(TableTotal)