import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

export const fetchMapSettings = createAsyncThunk(
  "worldMap/fetchMapSettings",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(
        endpoints.WorldMap.homeWorlMap
      );

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMapLocations = createAsyncThunk(
  "worldMap/fetchMapLocations",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(
        endpoints.WorldMap.mapList
      );

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMapSingle = createAsyncThunk(
  "worldMap/fetchMapSingle",
  async (slug, thunkAPI) => {
    try {
      const res = await axiosInstance.get(
        endpoints.WorldMap.mapSingle(slug)
      );

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  settings: null,
  locations: [],
  singleLocation: null,
  loading: false,
  error: null,
};

const worldMapSlice = createSlice({
  name: "worldMap",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchMapSettings.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchMapSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.settings = action.payload;
      })

      .addCase(fetchMapSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchMapLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })

      .addCase(fetchMapSingle.fulfilled, (state, action) => {
        state.singleLocation = action.payload;
      });
  },
});

export default worldMapSlice.reducer;