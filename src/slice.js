import { createSlice } from '@reduxjs/toolkit';

export const atmosphereSlice = createSlice({
    name: 'condicionesAtmosfericas',
    initialState: {
      page: 1,
      atmosphere: [],
      isLoading: false,
      idDetails: ''
    },
    reducers: {
      startLoading: (state, /* action */ ) => {
        state.isLoading = true;
      },
      setAtmosphereConditions: (state, action) =>{
        state.isLoading = false;
        state.atmosphere = action.payload.results
        state.page = action.payload.page
      },
      setIdDetails: (state, action) =>{
        state.isLoading = false
        state.idDetails = action.payload
      }
    }
});


// Action creators are generated for each case reducer function
export const { startLoading, setAtmosphereConditions, setIdDetails } = atmosphereSlice.actions;
