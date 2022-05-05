import GetSheets from "./GetSheets"
import {
    connect
} from "react-redux"
import React from "react"
import { getAllSheets } from "../redux/sheets-reducer"
const mapStateToProps = (state) => {

    return {
        sheets: state.sheets
    }
}
class GetSheetsContainer extends React.Component{

    componentDidMount(){
        this.props.getAllSheets()
    }
    render(){
        return(
            <GetSheets sheets={this.props.sheets}/>
        )
    }
}

export default connect(mapStateToProps, {
    getAllSheets

})(GetSheetsContainer)