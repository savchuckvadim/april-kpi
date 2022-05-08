import { connect } from "react-redux"
import { changeStatistics } from "../../../redux/reducers/statistics-reducer"
import StatisticsButton from "./Statistics-Button"


const mapStateToProps = (state) => {

    return {
        value: state.statistics.value
    }
}


export const StatisticsButtonContainer = connect(mapStateToProps,{
    changeStatistics
})(StatisticsButton)