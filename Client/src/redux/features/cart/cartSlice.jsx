import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((i) => i._id === action.payload._id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i._id === action.payload);
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
        },
        clearCart: (state) => {
            state.cartItems = []; // ❌ Sare items hatao
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
