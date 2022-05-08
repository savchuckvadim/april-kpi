import { connect } from "react-redux"
import Main from "./Main"


const mapStateToProps = (state)=> {

    return {
        statistics: state.statistics.show
    }
}

const MainContainer = connect(mapStateToProps)(Main)
export default MainContainer