import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        setCartItem: (state, action) => {
            const {items} = action.payload; 
            console.log(`Items from redux: ${items}`);
            state.items = action.payload;
        }
    }
}
)