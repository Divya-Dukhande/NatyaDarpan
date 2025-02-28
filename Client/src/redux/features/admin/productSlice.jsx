import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("/api/products");
    return response.data;
});

// Add product
export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    const response = await axios.post("/api/products", product);
    return response.data;
});

// Delete product
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    await axios.delete(`/api/products/${id}`);
    return id;
});

const productSlice = createSlice({
    name: "products",
    initialState: { products: [], status: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = "success";
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product._id !== action.payload);
            });
    },
});

export default productSlice.reducer;
