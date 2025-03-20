import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../lib/axios";  // Assuming axios instance

// Thunks to interact with the backend API
export const fetchCart = createAsyncThunk('cart/fetchCart', async (token) => {
    try {
        const response = await client.get('/cart/', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

export const addToCart = createAsyncThunk('cart/addToCart', async ({ productId, quantity, token }) => {
    try {
        const response = await client.post('/cart/add', { productId, quantity }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

export const decreaseQuantity = createAsyncThunk('cart/decreaseQuantity', async ({ productId, quantity, token }) => {
    try {
        const response = await client.patch(`/cart/update/${productId}`, {
            quantity, // This can be positive or negative based on operation
        }, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data; // Return the updated cart data
    } catch (error) {
        throw new Error(error.message);
    }
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({ productId, token }) => {
    try {
        const response = await client.delete(`/cart/delete/${productId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

export const clearCart = createAsyncThunk('cart/cart/clearCart', async ({ token }) => {
    try {
        const response = await client.delete('/cart', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

// Initial state of the cart
const initialState = {
    cartItems: [],
    totalPrice: 0,
    loading: false,
    error: null,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Cart
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cartItems = action.payload.items;
                state.totalPrice = action.payload.totalPrice;
                state.loading = false;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            // Add to Cart
            .addCase(addToCart.fulfilled, (state, action) => {
                state.cartItems = action.payload.items;
                state.totalPrice = action.payload.totalPrice;
            })
            // Decrease Quantity
            .addCase(decreaseQuantity.fulfilled, (state, action) => {
                state.cartItems = action.payload.items;
                state.totalPrice = action.payload.totalPrice;
            })
            // Remove from Cart
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.cartItems = action.payload.items;
                state.totalPrice = action.payload.totalPrice;
            })
            // Clear Cart
            .addCase(clearCart.fulfilled, (state) => {
                state.cartItems = [];
                state.totalPrice = 0;
            });
    }
});

export default cartSlice.reducer;
