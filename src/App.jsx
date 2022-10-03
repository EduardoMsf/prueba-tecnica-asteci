import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TableId } from './components/TableId';
import './sass/App.scss';
import { getAtmosphereConditions } from './thunks';

export const App = () => {

  const dispatch = useDispatch()
  const {page} = useSelector(state => state.atmosphere)

  useEffect(() => {
    dispatch( getAtmosphereConditions())
  }, [])

  return (
    <div className="App">
      <TableId />
      <button onClick={() => dispatch( getAtmosphereConditions(page+1))}>Next Page</button>
    </div>
  )
}

export default App
