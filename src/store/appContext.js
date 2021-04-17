import { createContext, useState, useEffect } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = PassedComponent =>{
    const StoreWrapper = props =>{
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: {...state.actions}
            })
        }))

        useEffect(() => {
            console.log("Cargando información...");
           // state.actions.getFetch("people", "https://swapi.dev/api/people/");
          
        },[])

       

        return (
            <Context.Provider value={state}>
                <PassedComponent/>
            </Context.Provider>
        )
    }
    return StoreWrapper;
}

export default injectContext;