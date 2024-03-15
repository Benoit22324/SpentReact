import { useSpentContext } from "../utils/SpentContext";

const HistoryCat = () => {
    const [state, dispatch] = useSpentContext();

    const update = (e) => {
        dispatch({type: 'setHistoryCat', payload: e.target.value})
    }

    return (
        <>
            <label className="history_catselector">Trié par :
                <select name={'cathistory'} value={state.hcat} onChange={update} className="form_selectButton">
                    <option value={''}>Tout</option>
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

export default HistoryCat