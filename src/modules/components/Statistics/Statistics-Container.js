import { connect } from "react-redux"
import Statistics from "./Statistics"

const mapStateToProps = (state) => {

    let rows = state.sheets.showRows
    let period = 0
    let dates = ''
    let managers = ''

    let numberSets = 0
    let callsOverThirdSek = 0
    let appointment = 0
    let carried = 0
    let checks = 0
    let sales = 0

    let avargeNumberSets = 0
    let avargeCallsOverThirdSek = 0
    let avargeAppointment = 0
    let avargeCarried = 0
    let avargeChecks = 0
    let avargeSales = 0

    let conversionCallsOverThirdSek = 0
    let conversionAppointment = 0
    let conversionCarried = 0
    let conversionChecks = 0
    let conversionSales = 0

    if (rows.length > 0) {

        dates = `c ${rows[0].date.toLocaleDateString()} 
        по ${rows[rows.length - 1].date.toLocaleDateString()} `

        managers = [...new Set(rows.map(row => (row.manager)))].join(', ')
        
        rows.forEach(row => {
            numberSets += row.numberSets
            callsOverThirdSek += row.callsOverThirdSek
            appointment += row.appointment
            // appointment += row.appointment
            carried += row.carried
            checks += row.checks
            sales += row.sales
        })
        period =[...new Set(rows.map(row => row.date.toLocaleDateString()))].length
     
        avargeNumberSets = Math.round(numberSets / period)
        avargeCallsOverThirdSek = Math.round(callsOverThirdSek / period)
        avargeAppointment = Math.round(appointment / period)
        avargeCarried = Math.round(carried / period)
        avargeChecks = Math.round(checks / period)
        avargeSales = Math.round(sales / period)

        conversionCallsOverThirdSek = Math.round(callsOverThirdSek/numberSets*100)
        conversionAppointment = Math.round(appointment/callsOverThirdSek*100)
        conversionCarried = Math.round(carried/appointment*100)
        conversionChecks =  Math.round(checks/carried*100)
        conversionSales = Math.round(sales/checks*100)
    }



    return {
        period:period,
        showRows: state.sheets.showRows,
        dates: dates,
        managers: managers,
        avargeNumberSets,
        avargeCallsOverThirdSek,
        avargeAppointment,
        avargeCarried,
        avargeChecks,
        avargeSales,

        conversionCallsOverThirdSek,
        conversionAppointment,

        conversionCarried,
        conversionChecks,
        conversionSales


    }
}


const StatisticsContainer = connect(mapStateToProps)(Statistics)

export default StatisticsContainer