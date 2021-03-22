import React from 'react'
import { ProductsList } from "./components/ProductsList"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { ProductDetails } from 'pages/ProductDetails'

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
      <ProductsList/>
      </Route>
      <Route path="/products/:id" exact>
        <ProductDetails/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}
