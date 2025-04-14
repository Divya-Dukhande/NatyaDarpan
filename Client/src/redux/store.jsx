import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/authSlice.jsx";
import { productSlice } from "./features/admin/productSlice.jsx";
import { cartSlice } from "./E-commerce/cart/cartSlice.jsx";
import { addressSlice } from "./E-commerce/address/addressSlice.jsx";
import { querySlice } from "./E-commerce/querySlice.jsx";
// import { orderSlice } from "./E-commerce/order/orderSlice.jsx";
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        address: addressSlice.reducer, 
        queries:querySlice.reducer,
        // orders: orderSlice.reducer
    }
});

export default store;

