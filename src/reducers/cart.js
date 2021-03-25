  
import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name: "cart",
    initialState: {
      cartItems: [],// {id, name, description, price}
        //quantity: 0
      totalSum:0,
      //isOpen:false
      //qtyOfProduct:
      cartItemcount:0
    },
    reducers: {
        setCartItems: (state, action) => {
         state.cartItems = action.payload
        },
       

        // setQuantity:(state, action) => {
        // state.quatity = action.payload
        // }
    }
}
)
//export const getCartItem =() =>{
  //  return(dispatch) => { 
//     console.log("getitem")
//     dispatch(cart.actions.setCart())
// }


// export const someAction = () =>
//   (dispatch, getState) => {
//     const someVal = getState().someReducer.someVal;
//     dispatch({ type: types.SOME_ACTION, valFromOtherReducer: someVal });
//   };


// export const addItem = (item) => {
//     return(dispatch, getState) => { 
//         const item = getState().products.find((product) => product.id === action.payload.id);
//           const inCart = state.cart.find((item) =>item.id === action.payload.id ? true : false)
//            setCartItems([...cart,item])
//     };
// };

// export const removeItem = (itemId) => {
//     return(dispatch) => { 
//         console.log("removeitem")
//         // dispatch(cart.actions.setCart(
//         //     cart.filter((item) => itemId !== itemId)
//         // ))
//  };
// }

// export const adjustQty = ( itemId, value) => {
//     return(dispatch) => { 
//         console.log("quantity")
//         //dispatch(cart.actions.setCart(
//             //cart.filter((item) => itemId !== itemToRemove)
//        // ))
// } 
// }