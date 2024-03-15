import { useEffect } from "react";
import { useSpentContext } from "../utils/SpentContext";
import HistoryCat from "./HistoryCat";

const History = () => {
    const [state, dispatch] = useSpentContext();

    useEffect(() => {
        if (state.hcat !== '') {
            const filtered = state.entry.filter((item) => item.cat === state.hcat);
            dispatch({type: 'setCatHistory', payload: filtered})
        }
        else dispatch({type: 'setCatHistoryDefault'})
    }, [state.hcat, state.entry])

    return (
        <>
            <HistoryCat />
            <p>Montant total: {state.cattot}€ /{state.catentry.length > 1 ? <span>{state.catentry.length} dépenses</span> : <span>{state.catentry.length} dépense</span>}</p>
            {
                state.entry.length !== 0 ?
                    state.catentry.length !== 0 ?
                    state.catentry.map((item, i) =>
                        <div key={i}>Montant: {item.value}€, le {item.date}</div>
                    )
                    :
                    <p>Aucun montant saisie dans cette catégorie</p>
                :
                <p>Aucun montant saisie pour l'instant</p>
            }
        </>
    )
}

export default History