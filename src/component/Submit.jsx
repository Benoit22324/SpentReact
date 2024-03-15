import { useSpentContext } from "../utils/SpentContext";

const Submit = () => {
    const [state, dispatch] = useSpentContext();

    const add = () => {
        if (state.inputvalue !== '' && state.inputcat !== '') {
            const date = new Date()
            const currentdate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
            const currenttime = `${date.getHours()}h ${date.getMinutes()}m`
        
            dispatch({type: 'addSpent', payload: {date: currentdate, time: currenttime}})
        }
        else if (state.inputvalue === '' && state.inputcat !== '') dispatch({type: 'setError', payload: 'Veuillez saisir un montant'})
        else if (state.inputvalue !== '' && state.inputcat === '') dispatch({type: 'setError', payload: 'Veuillez choisir une catégorie'})
        else dispatch({type: 'setError', payload: 'Veuillez saisir un montant et choisir une catégorie'})
    }

    return (
        <>
            <button onClick={add} className="form_submitButton">Ajouter</button>
        </>
    )
}

export default Submit