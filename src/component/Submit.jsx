import { useSpentContext } from "../utils/SpentContext";

const Submit = () => {
    const [state, dispatch] = useSpentContext();

    const add = () => {
        if (state.inputvalue !== '') dispatch({type: 'addSpent'})
    }

    return (
        <>
            <button onClick={add}>Ajouter</button>
        </>
    )
}

export default Submit