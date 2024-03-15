export const init = {
    inputvalue: '',
    inputcat: 'alim',
    entry: [],
    total: 0,
}

const SpentReducer = (state, action) => {

    switch(action.type) {
        case 'updateValue': return {
            ...state,
            inputvalue: action.payload,
        }

        case 'updateCat': return {
            ...state,
            inputcat: action.payload,
        }

        case 'addSpent': return {
            ...state,
            entry: [...state.entry, {value: state.inputvalue + '€', cat: state.inputcat}],
            total: state.total + parseFloat(state.inputvalue),
            inputvalue: '',
        }

        default: return state
    }
}

export default SpentReducer