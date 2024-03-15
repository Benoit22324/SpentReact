import { useSpentContext } from "../utils/SpentContext"
import Input from "./Input"
import Select from "./Select"
import Submit from "./Submit"

const Form = () => {
    const [state] = useSpentContext();

    return (
        <>
            <div>
                {
                    state.error !== '' && <p className="error">{state.error}</p>
                }
                <div className="formSection">
                    <h2>Ajouter une dépense</h2>
                    <div className="form">
                        <Input />
                        <Select />
                        <Submit />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form