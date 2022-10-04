import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAtmosphereConditions } from "../thunks"


export const TableId = () => {
  
  const dispatch = useDispatch()
  const { page, isLoading, atmosphere } = useSelector(state => state.atmosphere)
  const [ limit, setLimit] = useState(0)
  console.log(limit)

  useEffect(() => {
    setLimit(0)
  }, [page])
  

  const handleNextTen = () =>{
    setLimit(prev => prev + 10)
  }
  return (
    <div>
      <h1>Condiciones Atmosféricas</h1>
      <table>
        <tbody >
          <tr >
          <th>ID</th>
         
          <th>CIUDAD ID</th>
         
          <th>NOMBRE</th>
         
          <th>ESTADO</th>
         
          <th>PROBILIDAD DE PRECIPITACIÓN</th>
         
          <th>HUMEDAD RELATIVA</th>
         
          <th>ÚLTIMO INFORME</th>
         
          <th>LLUVIA</th>
          </tr>

          { limit < 99 ? atmosphere.slice(limit,limit+9).map((dato, index) => (
            <tr key={index}>
              <td> <Link to={`/detail/${dato._id}`}>{dato._id}</Link></td>
              <td>{dato.cityid}</td>
              <td>{dato.name}</td>
              <td>{dato.state}</td>
              <td>{dato.probabilityofprecip}</td>
              <td>{dato.relativehumidity}</td>
              <td>{Date(dato.lastreporttime)}</td>
              <td>{(dato.probabilityofprecip > 60 || dato.relativehumidity > 50) ? 'Lluvia' : 'Sin lluvia' }</td>
            </tr>
            )) : setLimit(0)
          }
        
        </tbody>
      </table>
      <div className="table-id_buttons">
        <h3 className="margin1">{limit+10} de 100</h3>
        <button className="margin1" onClick={handleNextTen}>Next 10</button>
      </div>
      <button onClick={() => dispatch( getAtmosphereConditions(page+1))}>Next Page</button>
    </div>
  )
}
