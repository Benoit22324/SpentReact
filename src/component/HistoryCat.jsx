import { useSpentContext } from "../utils/SpentContext";

const HistoryCat = () => {
    const [state, dispatch] = useSpentContext();

    const update = (e) => {
        dispatch({type: 'setHistoryCat', payload: e.target.value})
    }

    return (
        <>
            <label>Trié par :
                <select name={'cathistory'} value={state.hcat} onChange={update} className="form_selectButton">
                    <option value={''}>Tout</option>
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

export default HistoryCat