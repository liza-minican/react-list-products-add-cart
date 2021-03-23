import React from 'react'
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { ProductDetails } from 'pages/ProductDetails'
import { ProductList } from "./components/ProductList"


import { cart } from "./reducers/cart";

import { productList } from "./reducers/productList";

const reducer = combineReducers({
  cart: cart.reducer,
  productList: productList.reducer,
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
       <BrowserRouter>
    <Switch>
      <Route path="/" exact>
      <ProductList/>
      </Route>
      <Route path="/products/:id" exact>
        <ProductDetails/>
      </Route>
    </Switch>
    </BrowserRouter>
    </Provider>
  )
}
