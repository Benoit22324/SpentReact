import { useSpentContext } from '../utils/SpentContext.jsx'

const Input = () => {
    const [state, dispatch] = useSpentContext();

    const updateValue = (e) => {
        if (e.target.value.match('^[0-9]*$')) dispatch({type: 'updateValue', payload: e.target.value})
        else dispatch({type: 'setError', payload: 'Veuillez entrer un chiffre'})
    }

    return (
        <>
            <input type='text' value={state.inputvalue} onChange={updateValue}/>
        </>
    )
}

export default Input