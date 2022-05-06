import {
    getAllRows
} from "../../services/api"

const ALL_SHEETS = 'ALL_SHEETS'
const SET_MANAGERS = 'SET_MANAGERS'
const CHANGE_MANAGER = 'CHANGE_MANAGER';
let initialState = {
    allRows: [],
    showRows: [],
    managers: []
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

const sheetsReducer = (state = initialState, action) => {

    let result = state
    switch (action.type) {
        case ALL_SHEETS:
            result = {
                ...state
            }
            result.allRows = action.allRows
            result.showRows = action.allRows
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
                result.showRows = []
                result.allRows.forEach(row => {

                    if (row.manager === action.manager){
                        result.showRows.push(row)
                    }
                })
                debugger
            } else {
                result.showRows = result.allRows
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