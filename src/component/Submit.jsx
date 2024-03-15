import { useSpentContext } from "../utils/SpentContext";

const Submit = () => {
    const [state, dispatch] = useSpentContext();

    const add = () => {
        if (state.inputvalue !== '' && state.inputcat !== '') {
            const date = new Date()
            const current = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}h`;
        
            dispatch({type: 'addSpent', payload: current})
        }
        else if (state.inputvalue === '' && state.inputcat !== '') dispatch({type: 'setError', payload: 'Veuillez saisir un montant'})
        else if (state.inputvalue !== '' && state.inputcat === '') dispatch({type: 'setError', payload: 'Veuillez choisir une catégorie'})
        else dispatch({type: 'setError', payload: 'Veuillez saisir un montant et choisir une catégorie'})
    }

    return (
        <>
            <button onClick={add}>Ajouter</button>
        </>
    )
}

export default Submit