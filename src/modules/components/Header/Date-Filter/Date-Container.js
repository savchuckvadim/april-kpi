import {
    connect
} from "react-redux"
import { changeFilter} from "../../../redux/reducers/sheets-reducer"
import Date from "./Date"

const mapStateToProps = (state) => {

    return {
        dateFrom: state.sheets.dateFrom,
        dateTo: state.sheets.dateTo,
        currentManager:state.sheets.currentManager
    }
}
const mapDispatchToProps = (dispatch) => {
    const changeDate = (currentManager, dateFrom, dateTo) => {
            const action = changeFilter(currentManager, dateFrom, dateTo)  
            dispatch(action)
    }
    return {
        changeDate: changeDate
    }
}
const DateContainer = connect(mapStateToProps, mapDispatchToProps)(Date)
export default DateContainer