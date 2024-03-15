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
                    <option value={'alim'}>Alimentation</option>
                    <option value={'loge'}>Logement</option>
                    <option value={'trans'}>Transport</option>
                    <option value={'div'}>Divertissement</option>
                    <option value={'san'}>Santé</option>
                    <option value={'edu'}>Éducation</option>
                    <option value={'other'}>Autres</option>
                </select>
            </label>
        </>
    )
}

export default Select