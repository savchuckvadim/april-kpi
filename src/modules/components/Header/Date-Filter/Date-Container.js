import {
    connect
} from "react-redux"
import { changeDateFrom, changeManager } from "../../../redux/reducers/sheets-reducer"
import Date from "./Date"

const mapStateToProps = (state) => {

    return {
        dateFrom: state.sheets.dateFrom,
        currentManager:state.sheets.currentManager
    }
}
const mapDispatchToProps = (dispatch) => {
    const DateFrom = (date, currentManager) => {

        if(currentManager){
            const managerAction = changeManager(currentManager)
            const dateAction = changeDateFrom(date)
            dispatch(managerAction)
            dispatch(dateAction)
        }else{
            const dateAction = changeDateFrom(date) 
            dispatch(dateAction)
        }
    }
    return {
        changeDateFrom: DateFrom
    }
}
const DateContainer = connect(mapStateToProps, mapDispatchToProps)(Date)
export default DateContainer