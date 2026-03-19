import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

// API CALL
export const fetchNotices = createAsyncThunk(
    "notice/fetchNotices",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get(endpoints.Initiatives.allNotice);
            return res.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Error");
        }
    }
);

export const fetchNoticeDetails = createAsyncThunk(
    "notice/fetchNoticeDetails",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get(
                endpoints.Initiatives.noticeDetails(id)
            );
            return res.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Error");
        }
    }
);

const noticeSlice = createSlice({
    name: "notice",
    initialState: {
        notices: [],
        noticeDetails: null,
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchNotices.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNotices.fulfilled, (state, action) => {
                state.loading = false;
                state.notices = action.payload;
            })
            .addCase(fetchNotices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchNoticeDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNoticeDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.noticeDetails = action.payload[0];
            })
            .addCase(fetchNoticeDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
            
    },
});

export default noticeSlice.reducer;  