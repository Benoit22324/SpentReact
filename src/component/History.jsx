import { useSpentContext } from "../utils/SpentContext";

const History = () => {
    const [state] = useSpentContext();

    return (
        <>
            <p>Dépense total: {state.total}€</p>
            {
                state.entry.length !== 0 && state.entry.map((item, i) => <div key={i}>Catégorie: {item.cat}, Montant: {item.value}</div>)
            }
        </>
    )
}

export default History