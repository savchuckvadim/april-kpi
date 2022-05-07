import { connect } from "react-redux"
import { changeManager } from "../../../redux/reducers/sheets-reducer"
import ManagerFilter from "./Manager-Filter"

const mapStateToProps = (state) => {

    return {
        managers: state.sheets.managers
    }
}




 const ManagerFilterContainer = connect(mapStateToProps, {
    changeManager:changeManager
})(ManagerFilter)

export default ManagerFilterContainer