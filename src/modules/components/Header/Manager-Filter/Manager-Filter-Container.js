import { connect } from "react-redux"
import { changeDateFrom, changeManager } from "../../../redux/reducers/sheets-reducer"
import ManagerFilter from "./Manager-Filter"

const mapStateToProps = (state) => {

    return {
        managers: state.sheets.managers,
        dateFrom: state.sheets.dateFrom
    }
}

const mapDispatchToProps = (dispatch) => {
    const manager = (date, currentManager) => {

        if(date){
            const managerAction = changeManager(currentManager)
            const dateAction = changeDateFrom (date)
            dispatch(managerAction)
            dispatch(dateAction)
        }else{
            const managerAction = changeManager(currentManager)
           
            dispatch(managerAction)
            
        }
    }
    return {
        manager: manager
    }
}


 const ManagerFilterContainer = connect(mapStateToProps, mapDispatchToProps)(ManagerFilter)

export default ManagerFilterContainer