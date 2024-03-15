import { useSpentContext } from "../utils/SpentContext"
import Input from "./Input"
import Select from "./Select"
import Submit from "./Submit"

const Form = () => {
    const [state] = useSpentContext();

    return (
        <>
            {
                state.error !== '' && <p>{state.error}</p>
            }
            <div>
                <Input />
                <Select />
                <Submit />
            </div>
        </>
    )
}

export default Form