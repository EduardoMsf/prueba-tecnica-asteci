import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export const TableId = () => {

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
      <h1>Inicio TableID Component</h1>
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

          { limit < 99 ? atmosphere.slice(limit,limit+9).map((dato, index) => (
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
            )) : setLimit(0)
          }
        
        </tbody>
      </table>
      <button onClick={handleNextTen}>Next 10</button>
      <h3>{limit+10} de 100</h3>
    </div>
  )
}
