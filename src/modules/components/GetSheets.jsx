import React from "react"
import { getAllRows } from "../services/api"


const getingRows = (id = 0) => {
    let b = id
    let a = getAllRows(b)
    if (a || a.length !== 0) {
        debugger
        console.log(a)
        b++
        // getingRows(b++)
    } else {
        console.log('null')
        return
    }

}

class GetSheets extends React.Component {

    componentDidMount() {

        



    }
    render() {
        return <div>GetSheets</div>
    }
}

export default GetSheets