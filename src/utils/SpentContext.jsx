import { createContext, useContext, useReducer } from "react";
import SpentReducer from "../reducer/SpentReducer";
import { init } from "../reducer/SpentReducer";

const SpentContext = createContext();

export const useSpentContext = () => {
    return useContext(SpentContext)
}

const SpentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SpentReducer, init);

    return <SpentContext.Provider value={[state, dispatch]}>
        {children}
    </SpentContext.Provider>
}

export default SpentContextProvider