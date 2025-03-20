import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAddresses = createAsyncThunk(
    "address/fetchAddresses",
    async (userId) => {
        const res = await axios.get(`/api/addresses/${userId}`);
        return res.data;
    }
);

export const addAddress = createAsyncThunk(
    "address/addAddress",
    async ({ userId, address }) => {
        const res = await axios.post("/api/addresses/add", { userId, address });
        return res.data;
    }
);

export const setDefaultAddress = createAsyncThunk(
    "address/setDefaultAddress",
    async ({ userId, addressId }) => {
        const res = await axios.put("/api/addresses/default", { userId, addressId });
        return res.data;
    }
);

export const deleteAddress = createAsyncThunk(
    "address/deleteAddress",
    async ({ userId, addressId }) => {
        const res = await axios.delete(`/api/addresses/${userId}/${addressId}`);
        return res.data;
    }
);

export const addressSlice = createSlice({
    name: "address",
    initialState: { addresses: [], selectedAddress: null, status: "idle", error: null },
    reducers: {
        setSelectedAddress(state, action) {
            state.selectedAddress = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddresses.fulfilled, (state, action) => {
                state.addresses = action.payload?.addresses || [];
            })
            .addCase(addAddress.fulfilled, (state, action) => {
                state.addresses = action.payload?.addresses || [];
            })
            .addCase(setDefaultAddress.fulfilled, (state, action) => {
                state.addresses = action.payload?.addresses || [];
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.addresses = action.payload?.addresses || [];
            });
    },
});

export const { setSelectedAddress } = addressSlice.actions;

export default addressSlice.reducer;
