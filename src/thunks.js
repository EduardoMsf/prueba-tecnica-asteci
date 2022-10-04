import { setAtmosphereConditions, setIdDetails, startLoading } from "./slice"

export const getAtmosphereConditions = ( page = 1) => {
    return async( dispatch, getState ) => {
      //llamada a la api setear el estado en redux-toolkit
      dispatch( startLoading())
      const resp = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${page}`)
      const {results} = await resp.json()
      dispatch( setAtmosphereConditions({results, page}))
    }
  }

export const getIdDetails = ( id = '') => {
  return async(dispatch, getState) =>{
    dispatch( startLoading())
    const {atmosphere} = await getState().atmosphere
    const resp = atmosphere.find( atmos => atmos._id == id)
    dispatch( setIdDetails(resp))
  }
}