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
            <div className="history">
                <h2>Vos dépenses :</h2>
                <HistoryCat />
                {
                    state.entry.length !== 0 ?
                        state.catentry.length !== 0 ? 
                        <table className="history_table">
                            <thead>
                                <tr><td>Montant</td> <td>Catégorie</td> <td>Date</td> <td>Temps</td></tr>
                            </thead>
                            <tbody>
                            {state.catentry.map((item, i) =>
                                <tr key={i}><td>{item.value}€</td> <td>{item.cat}</td> <td>{item.date}</td> <td>{item.time}</td></tr>
                            )}
                            <tr className="history_table_tot"><td colSpan={3}>Montant total</td> <td>{state.cattot}€ /{state.catentry.length > 1 ? <span>{state.catentry.length} dépenses</span> : <span>{state.catentry.length} dépense</span>}</td></tr>
                            </tbody>
                        </table>
                        :
                        <p>Aucun montant saisie dans cette catégorie</p>
                    :
                    <p>Aucun montant saisie pour l'instant</p>
                }
            </div>
        </>
    )
}

export default History