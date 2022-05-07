import GetSheets from "./GetSheets"
import {
    connect
} from "react-redux"
import React from "react"
import { getAllSheets } from "../redux/reducers/sheets-reducer"
import CustomPaginationActionsTable from "./Table/Table.jsx"
const mapStateToProps = (state) => {


    return {
        allRows: state.sheets.showRows,
        currentManager: state.sheets.currentManager
    }
}
class GetSheetsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllSheets()
    }
    render() {

        return (
            <GetSheets
                allRows={this.props.allRows}
                currentManager={this.props.currentManager}
            />
            // <CustomPaginationActionsTable sheets={this.props.sheets}/>
        )
    }
}

export default connect(mapStateToProps, {
    getAllSheets

})(GetSheetsContainer)