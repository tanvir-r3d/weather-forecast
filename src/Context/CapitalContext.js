import {createContext, useState} from "react";

export const CapitalContext = createContext();

export function WrapWithCapitalContext(props) {
    const [capital, setCapital] = useState("Dhaka");
    return <CapitalContext.Provider value={{capital, setCapital}}>
        {props.children}
    </CapitalContext.Provider>
}