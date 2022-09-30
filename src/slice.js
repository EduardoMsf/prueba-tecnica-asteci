import { createSlice } from '@reduxjs/toolkit';

export const atmosphereSlice = createSlice({
    name: 'condicionesAtmosfericas',
    initialState: {
      page: 0,
      atmosphere: [],
      isLoading: false
    },
    reducers: {
      startLoading: (state, /* action */ ) => {
        state.isLoading = true;
      },
      setAtmosphereConditions: (state, action) =>{
        state.isLoading = false;
        console.log(action)
      }
    }
});


// Action creators are generated for each case reducer function
export const { startLoading, setAtmosphereConditions } = atmosphereSlice.actions;
