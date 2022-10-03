import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TableId } from './components/TableId';
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
  const {page} = useSelector(state => state.atmosphere)

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

  // const handlePage = () =>{
  //   dispatch( getAtmosphereConditions(page))
  // }

  return (
    <div className="App">
      <h1 className='border'> Inicio de prueba</h1>
      <button onClick={() => dispatch( getAtmosphereConditions(page+1))}>Next Page</button>
      <TableId />
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
