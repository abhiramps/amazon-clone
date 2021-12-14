import React, { createContext, useReducer } from 'react'

import { initialState, Reducer } from './Reducer';


export const AmazonContext = createContext(initialState);

export const Providers = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    
    return (
        <AmazonContext.Provider value={{
            dispatch,
            cartItems: state.cartItems,
        }}>
            {children}
        </AmazonContext.Provider>
    )
}
