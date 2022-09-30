import { startLoading } from "./slice"

export const getAtmosphereConditions= () => {
    return async( dispatch, getState ) => {
      //llamada a la api setear el estado en redux-toolkit
      dispatch( startLoading())
      const API = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
    }
  }