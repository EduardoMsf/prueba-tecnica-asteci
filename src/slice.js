import { createSlice } from '@reduxjs/toolkit';

export const atmosphereSlice = createSlice({
    name: 'condicionesAtmosfericas',
    initialState: {
      page: 1,
      atmosphere: [],
      isLoading: false
    },
    reducers: {
      startLoading: (state, /* action */ ) => {
        state.isLoading = true;
      },
      setAtmosphereConditions: (state, action) =>{
        state.isLoading = false;
        state.atmosphere = action.payload.results
        state.page = action.payload.page
        console.log('slice', action.payload.results)
      }
    }
});


// Action creators are generated for each case reducer function
export const { startLoading, setAtmosphereConditions } = atmosphereSlice.actions;
