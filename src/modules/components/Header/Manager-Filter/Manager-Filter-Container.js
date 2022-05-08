import { connect } from "react-redux"
import { changeFilter} from "../../../redux/reducers/sheets-reducer"
import ManagerFilter from "./Manager-Filter"

const mapStateToProps = (state) => {

    return {
        managers: state.sheets.managers,
        dateFrom: state.sheets.dateFrom,
        dateTo: state.sheets.dateTo
    }
}

const mapDispatchToProps = (dispatch) => {
    const  changeManager = (currentManager, dateFrom, dateTo) => {
            const action = changeFilter(currentManager, dateFrom, dateTo)  
            dispatch(action)
    }
    return {
        changeManager: changeManager
    }
}


 const ManagerFilterContainer = connect(mapStateToProps, mapDispatchToProps)(ManagerFilter)

export default ManagerFilterContainer