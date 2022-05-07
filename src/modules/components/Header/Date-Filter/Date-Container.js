import {
    connect
} from "react-redux"
import { changeDateFrom } from "../../../redux/reducers/sheets-reducer"
import Date from "./Date"

const mapStateToProps = (state) => {

    return {
    dateFrom: state.sheets.dateFrom
}
}
const mapDispatchToProps = () => {

    return {

}
}
const DateContainer = connect(mapStateToProps, {
    changeDateFrom:changeDateFrom
})(Date)
export default DateContainer