// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchAddresses = createAsyncThunk(
//     "address/fetchAddresses",
//     async (userId) => {
//         const res = await axios.get(`/api/addresses/${userId}`);
//         return res.data;
//     }
// );

// export const addAddress = createAsyncThunk(
//     "address/addAddress",
//     async ({ userId, address }) => {
//         const res = await axios.post("/api/addresses/add", { userId, address });
//         return res.data;
//     }
// );

// export const setDefaultAddress = createAsyncThunk(
//     "address/setDefaultAddress",
//     async ({ userId, addressId }) => {
//         const res = await axios.put("/api/addresses/default", { userId, addressId });
//         return res.data;
//     }
// );

// export const deleteAddress = createAsyncThunk(
//     "address/deleteAddress",
//     async ({ userId, addressId }) => {
//         const res = await axios.delete(`/api/addresses/${userId}/${addressId}`);
//         return res.data;
//     }
// );

// export const addressSlice = createSlice({
//     name: "address",
//     initialState: { addresses: [], selectedAddress: null, status: "idle", error: null },
//     reducers: {
//         setSelectedAddress(state, action) {
//             state.selectedAddress = action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchAddresses.fulfilled, (state, action) => {
//                 state.addresses = action.payload?.addresses || [];
//             })
//             .addCase(addAddress.fulfilled, (state, action) => {
//                 state.addresses = action.payload?.addresses || [];
//             })
//             .addCase(setDefaultAddress.fulfilled, (state, action) => {
//                 state.addresses = action.payload?.addresses || [];
//             })
//             .addCase(deleteAddress.fulfilled, (state, action) => {
//                 state.addresses = action.payload?.addresses || [];
//             });
//     },
// });

// export const { setSelectedAddress } = addressSlice.actions;

// export default addressSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch user addresses
export const fetchAddresses = createAsyncThunk(
    "address/fetchAddresses",
    async (userId, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/addresses/${userId}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch addresses");
        }
    }
);

// Add a new address
export const addAddress = createAsyncThunk(
    "address/addAddress",
    async ({ userId, address }, { rejectWithValue }) => {
        try {
            const res = await axios.post("/api/addresses/add", { userId, address });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to add address");
        }
    }
);

// Set default address
export const setDefaultAddress = createAsyncThunk(
    "address/setDefaultAddress",
    async ({ userId, addressId }, { rejectWithValue }) => {
        try {
            const res = await axios.put("/api/addresses/default", { userId, addressId });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to set default address");
        }
    }
);

// Delete an address
export const deleteAddress = createAsyncThunk(
    "address/deleteAddress",
    async ({ userId, addressId }, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`/api/addresses/${userId}/${addressId}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to delete address");
        }
    }
);

// Address Slice
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
            .addCase(fetchAddresses.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchAddresses.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.addresses = action.payload?.addresses || [];
                // If user has addresses, set the default one
                if (state.addresses.length > 0) {
                    state.selectedAddress = state.addresses.find(addr => addr.isDefault) || state.addresses[0];
                }
            })
            .addCase(fetchAddresses.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            .addCase(addAddress.fulfilled, (state, action) => {
                state.addresses = action.payload?.addresses || [];
                state.selectedAddress = action.payload?.newAddress || state.selectedAddress;
            })
            .addCase(addAddress.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(setDefaultAddress.fulfilled, (state, action) => {
                state.addresses = action.payload?.addresses || [];
                state.selectedAddress = action.payload?.selectedAddress;
            })
            .addCase(setDefaultAddress.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.addresses = action.payload?.addresses || [];
                // Reset selected address if deleted
                if (state.selectedAddress && !state.addresses.some(addr => addr._id === state.selectedAddress._id)) {
                    state.selectedAddress = state.addresses[0] || null;
                }
            })
            .addCase(deleteAddress.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { setSelectedAddress } = addressSlice.actions;
export default addressSlice.reducer;
