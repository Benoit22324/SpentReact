export const init = {
    inputvalue: '',
    inputcat: '',
    entry: [],
    total: 0,
    error: '',
    hcat: '',
    cattot: 0,
    catentry: [],
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

        case 'setHistoryCat': return {
            ...state,
            hcat: action.payload
        }

        case 'addSpent': return {
            ...state,
            entry: [...state.entry, {value: state.inputvalue, cat: state.inputcat, date: action.payload}],
            total: state.total + parseFloat(state.inputvalue),
            inputvalue: '',
        }

        case 'setCatHistoryDefault': return {
            ...state,
            cattot: state.total,
            catentry: state.entry
        }
        case 'setCatHistory': return {
            ...state,
            cattot: action.payload.reduce((acc, curr) => acc + parseFloat(curr.value), 0),
            catentry: action.payload
        }

        case 'setError': return {
            ...state,
            error: action.payload
        }

        default: return state
    }
}

export default SpentReducer