import { useSpentContext } from "../utils/SpentContext"

const Select = () => {
    const [state, dispatch] = useSpentContext();

    const update = (e) => {
        dispatch({type: 'updateCat', payload: e.target.value})
    }

    return (
        <>
            <select name={'select'} value={state.inputcat} onChange={update}>
                <option value={'alim'}>Alimentation</option>
                <option value={'loge'}>Logement</option>
                <option value={'trans'}>Transport</option>
                <option value={'div'}>Divertissement</option>
                <option value={'san'}>Santé</option>
                <option value={'edu'}>Éducation</option>
                <option value={'other'}>Autres</option>
            </select>
        </>
    )
}

export default Select