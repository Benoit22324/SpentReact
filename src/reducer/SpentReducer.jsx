export const init = {
    inputvalue: '',
    inputcat: '',
    entry: [],
    total: 0,
    error: '',
}

const SpentReducer = (state, action) => {

    switch(action.type) {
        case 'updateValue': return {
            ...state,
            inputvalue: action.payload,
            error: ''
        }

        case 'updateCat': return {
            ...state,
            inputcat: action.payload,
            error: ''
        }

        case 'addSpent': return {
            ...state,
            entry: [...state.entry, {value: state.inputvalue + '€', cat: state.inputcat}],
            total: state.total + parseFloat(state.inputvalue),
            inputvalue: '',
        }

        case 'setError': return {
            ...state,
            error: action.payload
        }

        default: return state
    }
}

export default SpentReducer