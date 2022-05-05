import React from "react"
import { getAllSheets } from "../redux/sheets-reducer"



// const getingRows = (id = 0) => {
//     let b = id
//     let a = getAllRows(b)
//     if (a || a.length !== 0) {
//         debugger
//         console.log(a)
//         b++
//         // getingRows(b++)
//     } else {
//         console.log('null')
//         return
//     }

// }

class GetSheets extends React.Component {
    names = []
    componentDidMount() {
        // getAllSheets()
        
        this.names = this.props.sheets.map(data => (data.manager))

    }
    componentDidUpdate(){
        this.names = this.props.sheets.map(data => (data.manager))
    }
    render() {
        debugger
        return (
            <>
                <div>GetSheets</div>
                <div>
                  {this.names}
                </div>
            </>

        )
    }
}

export default GetSheets