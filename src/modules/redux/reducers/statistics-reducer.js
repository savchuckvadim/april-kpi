const CHANGE_STATISTICS = 'CHANGE_STATISTICS';

const initialState = {
    show: false,
    value: 'Показать Статистику',
    values: ['Показать Статистику', 'Показать Таблицу']
}

export const changeStatistics = () => {
    return {
        type: CHANGE_STATISTICS
    }
}

const statisticsReducer = (state = initialState, action)=> {
let result = state
    switch (action.type) {
        
        case CHANGE_STATISTICS:
            result = {...state} 
            if(!result.show){
                result.show = true
                result.value = result.values[1]
            }else{
                result.show = false
                result.value = result.values[0]
            }
            return result;
        default:
            return result;
    }
}

export default statisticsReducer