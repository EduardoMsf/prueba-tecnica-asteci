import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getIdDetails } from "../thunks"

export const TableDetail = () => {
  const { page, isLoading, atmosphere } = useSelector(state => state.atmosphere)
  const { _id } = useParams()
  const detailId = atmosphere.find( id => id._id == _id)
  const detailMapped = detailId ? Object.values(detailId) : ''
  //dispatch( getIdDetails())
  return (
    <>
      <div>
        <div className="table-details_title">
          <h3>ID: {detailMapped[0]}</h3>
          <h3>NOMBRE: {detailMapped[6]}</h3>
        </div>
        <table className="table-details">
          <tbody >
            <tr >
              <th>CIUDAD ID</th>
             
              <th>FECHA UTC</th>
             
              <th>DIRECCIÓN DEL VIENTO</th>
             
              <th>PROBILIDAD DE PRECIPITACIÓN</th>
             
              <th>HUMEDAD RELATIVA</th>
            </tr>
            <tr>
              <td>{detailMapped[1]}</td>
              <td>{Date(detailMapped[2])}</td>
              <td>{detailMapped[3]}</td>
              <td>{detailMapped[4]}</td>
              <td>{detailMapped[5]}</td>
            </tr>
          </tbody >
        </table>
        <table className="table-details">
          <tbody >
            <tr >
              <th>FECHA DE REGISTRO</th>
             
              <th>LONGITUD</th>
             
              <th>ESTADO</th>
             
              <th>ÚLTIMO REPORTE</th>
             
              <th>DESCRIPCIÓN DEL CIELO</th>
            </tr>
            <tr>
              <td>{Date(detailMapped[7])}</td>
              <td>{detailMapped[8]}</td>
              <td>{detailMapped[9]}</td>
              <td>{Date(detailMapped[10])}</td>
              <td>{detailMapped[11]}</td>
            </tr>
          </tbody >
        </table>
        <table className="table-details">
          <tbody >
            <tr >
              <th>ESTADO ABREV</th>
             
              <th>TEMPERATURA</th>
             
              <th>LATITUD</th>
             
              <th>CÓDIGO</th>
             
              <th>VELOCIDAD DEL VIENTO</th>
            </tr>
            <tr>
              <td>{detailMapped[12]}</td>
              <td>{detailMapped[13]}</td>
              <td>{detailMapped[14]}</td>
              <td>{detailMapped[15]}</td>
              <td>{detailMapped[16]}</td>
            </tr>
          </tbody >
        </table>
        <button onClick={() => history.go(-1)}>Atras</button>
      </div>
    </>
  )
}
