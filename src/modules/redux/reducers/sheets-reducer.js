import {
    getAllRows
} from "../../services/api"

const ALL_SHEETS = 'ALL_SHEETS'
const SET_MANAGERS = 'SET_MANAGERS'
const CHANGE_FILTER = 'CHANGE_FILTER'


let initialState = {
    allRows: [],
    showRows: [],
    managers: [],
    currentManager: '',
    dateFrom: '',
    dateTo: ''
}

const setAllSheets = (allRows) => {

    return {
        type: ALL_SHEETS,
        allRows: allRows
    }
}

const setManagers = (managers) => {
    return {
        type: SET_MANAGERS,
        managers: managers
    }
}
export const changeFilter = (manager, dateFrom, dateTo) => {

    return {
        type: CHANGE_FILTER,
        manager,
        dateFrom,
        dateTo

    }
}

const sheetsReducer = (state = initialState, action) => {

    let result = state
    switch (action.type) {
        case ALL_SHEETS:
            result = {
                ...state
            }
            result.allRows = action.allRows
            result.showRows = action.allRows.map(row => {
                row.date = new Date(row.date)
                row.numberSets = Number(row.numberSets)
                row.callsOverThirdSek = Number(row.callsOverThirdSek)
                row.appointment = Number(row.appointment)
                row.appointment = Number(row.appointment)
                row.carried = Number(row.carried)
                row.checks = Number(row.checks)
                row.sales = Number(row.sales)
                return row
                // row.date
            })
            return result
        case SET_MANAGERS:
            result = {
                ...state
            }
            result.managers = action.managers
            return result

        case CHANGE_FILTER:
            result = {
                ...state
            }
            
            if (action.manager) {
               
                result.showRows = result.allRows.filter(row => row.manager === action.manager)
                result.currentManager = action.manager

            } else {
                result.showRows = result.allRows
            }

            if (action.dateFrom) {
                result.showRows = result.showRows.filter(row => row.date >= new Date(action.dateFrom))
                result.dateFrom = new Date(action.dateFrom)
            }
            if (action.dateTo) {
                result.showRows = result.showRows.filter(row => row.date <= new Date(action.dateTo))
                result.dateTo = new Date(action.dateTo)
            }
            return result


        default:
            return result;
    }

}

export const getAllSheets = () => (dispatch) => {

    getAllRows().then(res => {
        let allRows = setAllSheets(res)
        let managers = [...new Set(res.map(res => (res.manager)))]
        let managersAction = setManagers(managers)
        dispatch(allRows)
        dispatch(managersAction)

    })

}



export default sheetsReducer