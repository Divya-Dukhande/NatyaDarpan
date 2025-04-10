import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../lib/axios";

// ✅ Async thunk functions (define only, don’t export here)
const fetchQueries = createAsyncThunk("queries/fetch", async () => {
    const response = await client.get("/queries/get"); // remains same
    return response.data;
});

const respondToQuery = createAsyncThunk("queries/respond", async ({ id, response }) => {
    const res = await client.put(`/queries/${id}/respond`, { response }); // ✅ updated
    return res.data;
});

const submitQuery = createAsyncThunk("queries/submit", async (formData) => {
    const res = await client.post("/queries/add", formData); // ✅ updated
   
    return res.data;
});

export const querySlice = createSlice({
    name: "queries",
    initialState: {
        queries: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQueries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchQueries.fulfilled, (state, action) => {
                state.loading = false;
                state.queries = action.payload;
            })
            .addCase(fetchQueries.rejected, (state) => {
                state.loading = false;
                state.queries = [];
            })
            .addCase(respondToQuery.fulfilled, (state, action) => {
                const index = state.queries.findIndex(q => q._id === action.payload._id);
                if (index !== -1) {
                    state.queries[index] = action.payload;
                }
            })
            .addCase(submitQuery.pending, (state) => {
                state.loading = true;
            })
            .addCase(submitQuery.fulfilled, (state, action) => {
                state.loading = false;
                state.queries.push(action.payload); // ✅ add new query to list
            })
            .addCase(submitQuery.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default querySlice.reducer;
export { fetchQueries, respondToQuery, submitQuery }; // ✅ Clean, single export line
