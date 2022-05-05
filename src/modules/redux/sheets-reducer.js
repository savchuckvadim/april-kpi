import { getAllRows } from "../services/api"

const ALL_SHEETS = 'ALL_SHEETS'

let initialState = []

const setAllSheets = (sheets) => {

    return {
        type: ALL_SHEETS,
        sheets : sheets
    }
}

const sheetsReducer = (state = initialState, action) => {

    let result = state
    switch (action.type) {
        case ALL_SHEETS:
            result = [...state]
            result = action.sheets
            return result

        default:
            return result;
    }

}

export const getAllSheets = () => (dispatch) => {

    getAllRows().then(res => {
        let action = setAllSheets(res)
        
        dispatch(action)
    })
    
}

export default sheetsReducer