import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../lib/axios"; // ✅ Ensure client.js is properly set up

// ✅ Fetch Queries (Admin Side)
export const fetchQueries = createAsyncThunk("queries/fetchQueries", async (_, { rejectWithValue }) => {
    try {
        const response = await client.get("/queries");  // ✅ Removed duplicate `/api/v1/`
        return response.data;
    } catch (error) {
        console.error("Error fetching queries:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || "Failed to fetch queries");
    }
});

// ✅ Submit Query (User Side)
export const submitQuery = createAsyncThunk("queries/submitQuery", async (queryData, { rejectWithValue }) => {
    try {
        console.log("Submitting query:", queryData); // Debugging
        const response = await client.post("/queries", queryData); // ✅ Removed duplicate `/api/v1/`
        console.log("Query submitted successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Query submission failed:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || "Failed to submit query");
    }
});

// ✅ Respond to a Query (Admin Side)
export const respondToQuery = createAsyncThunk("queries/respond", async ({ id, response }, { rejectWithValue }) => {
    try {
        const { data } = await client.put(`/queries/${id}`, { response }); // ✅ Removed duplicate `/api/v1/`
        return data;
    } catch (error) {
        console.error("Error responding to query:", error.response?.data || error.message);
        return rejectWithValue(error.response?.data || "Failed to respond to query");
    }
});

// ✅ Redux Slice
export const querySlice = createSlice({
    name: "queries",
    initialState: { queries: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ✅ Fetch Queries
            .addCase(fetchQueries.pending, (state) => { state.loading = true; })
            .addCase(fetchQueries.fulfilled, (state, action) => {
                state.loading = false;
                state.queries = action.payload;
            })
            .addCase(fetchQueries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ✅ Submit Query
            .addCase(submitQuery.fulfilled, (state, action) => {
                console.log("Query added to state:", action.payload); // Debugging
                state.queries.push(action.payload);
            })
            .addCase(submitQuery.rejected, (state, action) => {
                state.error = action.payload;
            })

            // ✅ Respond to a Query
            .addCase(respondToQuery.pending, (state) => {
                state.loading = true;
            })
            .addCase(respondToQuery.fulfilled, (state, action) => {
                state.loading = false;
                state.queries = state.queries.map(query =>
                    query._id === action.payload._id ? action.payload : query
                );
            })
            .addCase(respondToQuery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default querySlice.reducer;
