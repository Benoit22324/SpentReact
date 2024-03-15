import { useSpentContext } from '../utils/SpentContext.jsx'

const Input = () => {
    const [state, dispatch] = useSpentContext();

    const updateValue = (e) => {
        if (e.target.value.match('^[0-9]*$')) dispatch({type: 'updateValue', payload: e.target.value})
        else dispatch({type: 'setError', payload: 'Veuillez entrer un chiffre'})
    }

    return (
        <>
            <label>Montant:
                <input type='text' value={state.inputvalue} onChange={updateValue} placeholder='Veuillez saisir un montant' className='form_inputArea'/>
            </label>
        </>
    )
}

export default Input