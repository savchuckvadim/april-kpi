const ALL_SHEETS = 'ALL_SHEETS'

let initialState = []

const sheetsReducer = (state = initialState, action) => {

    let result = state
    switch (action.type) {
        case ALL_SHEETS:
            result = [...state]
            return result

        default:
            return result;
    }

}

export default sheetsReducer