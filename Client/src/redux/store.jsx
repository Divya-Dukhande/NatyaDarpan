import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/authSlice.jsx";
import { productSlice } from "./features/admin/productSlice.jsx";
import { cartSlice } from "./features/cart/cartSlice.jsx";
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;