import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {
        name: null,
        price: null,
        image: null,
        description: null
    },
    loading: false,
    error: null
};


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        products: (state, action) => {
            state.products.name = action.payload.name; // Assuming payload contains _id
            state.products.price = action.payload.price; // Assuming payload contains username
            state.products.image = action.payload.image; // Assuming payload contains username
            state.products.description = action.payload.description; // Assuming payload contains email
            state.loading = false;
            state.error = null;
        },
    },
});

export const selectProducts = (state) => state.products.products;


export default productSlice.reducer;