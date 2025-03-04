import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/authSlice.jsx";
import { productSlice } from "./features/admin/productSlice.jsx";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        products: productSlice.reducer
    }
});

export default store;