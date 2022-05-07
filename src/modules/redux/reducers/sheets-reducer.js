import {
    getAllRows
} from "../../services/api"

const ALL_SHEETS = 'ALL_SHEETS'
const SET_MANAGERS = 'SET_MANAGERS'
const CHANGE_MANAGER = 'CHANGE_MANAGER';
const CHANGE_DATE_FROM = 'CHANGE_DATE_FROM'
const CHANGE_DATE_TO = 'CHANGE_DATE_TO'



let initialState = {
    allRows: [],
    showRows: [],
    managers: [],
    currentManager:'',
    dateFrom: ''
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

export const changeManager = (manager) => {
    
    return {
        type: CHANGE_MANAGER,
        manager: manager
    }
}

export const changeDateFrom = (date) => {

    return {
        type: CHANGE_DATE_FROM,
        date
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
        case CHANGE_MANAGER:

            if (action.manager) {
                result = {
                    ...state
                }
                result.showRows = result.allRows.filter(row => row.manager === action.manager)
                result.currentManager = action.manager 

            } else {
                result.showRows = result.allRows
            }

            return result

        case CHANGE_DATE_FROM:
            result = {
                ...state
            }
         
            
            result.showRows = state.showRows.filter(row => row.date > new Date(action.date))
            result.dateFrom = new Date(action.date)
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