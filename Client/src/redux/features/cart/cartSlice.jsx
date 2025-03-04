import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Cart items list
        totalPrice: 0, // Total price of all items
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += action.payload.price; // Assuming items have a price property
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.totalPrice -= state.items[itemIndex].price; // Subtract price
                state.items.splice(itemIndex, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;  
