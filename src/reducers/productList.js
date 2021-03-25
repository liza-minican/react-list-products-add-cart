
import { createSlice } from "@reduxjs/toolkit";


export const productList = createSlice({
    name: "productList",
    initialState: {
        products: []
    },

    reducers: {
        setProductList: (state, action) => {
            const {products} = action.payload; 
            console.log(`products from redux: ${products}`);
            state.products = action.payload;
        }
    }
});

export const getProducts = () => {
    return (dispatch) => {
      fetch(
        "https://falconx-development.coffee4tech.net/products/public?country=GB"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Could not get Products");
        })
        .then((json) => {
          dispatch(productList.actions.setProductList(json.docs)); 
        });
    };
};