import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import './App.css'
import './sass/App.scss';
import { getAtmosphereConditions } from './thunks';

export const App = () => {

  const [datos, setDatos] = useState([])
  const [indexAPI, setIndexAPI] = useState(9)
  const [idDetalles, setIdDetalles] = useState(0)
  const fecha = new Date()
  const API = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'

  const dispatch = useDispatch()
  //const [] = useSelector(state => state.atmosphere)

  useEffect(() => {
    const getData = async() =>{
      const respuesta = await fetch(API)
      const datosAPI = await respuesta.json()
      const {results} = datosAPI
      setDatos(results)
  
    }

    getData()
  
  }, [])

  useEffect(() => {
    dispatch( getAtmosphereConditions())
  }, [])
  


  
  // datos.map((dato, index) =>{
  //   if(index<10){
  //     console.log(dato)
  //   }
  // })
  
  
  
  // fetch(API)
  //   .then(response => response.json())
  //   .then(data => setDatos(data))


  const handleIndexAPI = () =>{
    setIndexAPI( prev => prev + 10)
  }

  // console.log(indexAPI)
  // datos.map((dato, index) => index < 1 ? console.log(Object.keys(dato)) : '')

  const handleDataDetails = (index) =>{
    setIdDetalles(index)
  }

  return (
    <div className="App">
      <h1 className='border'> Inicio de prueba</h1>
      <table>
        <tbody >
          <tr >
          <th>Id</th>
         
          <th>city Id</th>
         
          <th>Name</th>
         
          <th>state</th>
         
          <th>probability of precip</th>
         
          <th>relative humedity</th>
         
          <th>Last Report</th>
         
          <th>Lluvia</th>
          </tr>

          { datos.map((dato, index) => (index < indexAPI) ? (
            <tr key={index}>
              <td><a href='#detalles' onClick={() => handleDataDetails(index)}>{dato._id}</a></td>
              <td>{dato.cityid}</td>
              <td>{dato.name}</td>
              <td>{dato.state}</td>
              <td>{dato.probabilityofprecip}</td>
              <td>{dato.relativehumidity}</td>
              <td>{Date(dato.lastreporttime)}</td>
              <td>{(dato.probabilityofprecip > 60 || dato.relativehumidity > 50) ? 'Lluvia' : 'Sin lluvia' }</td>
            </tr>
          ): '')

          }
          
        </tbody>
      </table>
      {
        indexAPI > 99 ? <h2>Solo 100 registros</h2> : ''
      }
      {/* <div>
        {
          datos.map((dato, index) => index < 10 ? (
            <div>
              {dato._id} {index}
            </div>
          ): '')
        }
      </div> */}
      <button onClick={handleIndexAPI}>Siguientes 10</button>

      <br/>

      <div id='detalles'>
        <h1>Detalles</h1>
        <table>
          <tbody>
            <tr>

            {
              datos.map((dato, index) => index < 1 ?(
                  Object.keys(dato).map( key => (<th>{key}</th>))
              ) : '')
            } 
            </tr>
            <tr>
              {
                datos.map( (dato, index) => index == idDetalles ? (
                  Object.values(dato).map( detalle => (
                    <td>{detalle}</td>
                  ))
                ) : '')
              }
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App

{/* <tr>
            <td>Dato primer columna</td>
            <td>Dato segunda columna</td>
            <td>Dato tercera columna</td>
            <td>Dato cuarta columna</td>
            <td>Dato quinta columna</td>
            <td>Dato sexta columna</td>
            <td>Dato septima columna</td>
            <td>Dato octava columna</td> */}
