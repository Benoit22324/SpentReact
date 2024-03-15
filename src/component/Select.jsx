import { useSpentContext } from "../utils/SpentContext"

const Select = () => {
    const [state, dispatch] = useSpentContext();

    const update = (e) => {
        if (e.target.value !== '') dispatch({type: 'updateCat', payload: e.target.value})
    }

    return (
        <>
            <label>Catégorie:
                <select name={'select'} value={state.inputcat} onChange={update} className="form_selectButton">
                    <option value={''}>Choix de la catégorie</option>
                    <option value={'Alimentation'}>Alimentation</option>
                    <option value={'Logement'}>Logement</option>
                    <option value={'Transport'}>Transport</option>
                    <option value={'Divertissement'}>Divertissement</option>
                    <option value={'Santé'}>Santé</option>
                    <option value={'Éducation'}>Éducation</option>
                    <option value={'Autres'}>Autres</option>
                </select>
            </label>
        </>
    )
}

export default Select