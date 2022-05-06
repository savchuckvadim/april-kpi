const CHANGE_MANAGER = 'CHANGE_MANAGER';

const initialState = ''

export const changeManager = (manager) => {
    
    return {
        type: CHANGE_MANAGER,
        manager: manager
    }
}

 const filterManagerReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {
        case CHANGE_MANAGER:
            
            result = action.manager
            return result;

        default:
            return result;
    }
}
export default filterManagerReducer