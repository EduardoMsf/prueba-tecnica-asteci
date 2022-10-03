import { setAtmosphereConditions, startLoading } from "./slice"

export const getAtmosphereConditions= ( page = 1) => {
    return async( dispatch, getState ) => {
      //llamada a la api setear el estado en redux-toolkit
      dispatch( startLoading())
      const API = `https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${page}`
      const resp = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${page}`)
      const {results} = await resp.json()
      const filteredResults = results.filter((result, index) => index < 10 )
      console.log('thunks', filteredResults)
      dispatch( setAtmosphereConditions({results, page}))
    }
  }