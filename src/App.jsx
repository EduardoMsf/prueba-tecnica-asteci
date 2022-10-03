import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TableDetail } from './components/TableDetail';
import { TableId } from './components/TableId';
import './sass/App.scss';
import { getAtmosphereConditions, getIdDetails } from './thunks';

export const App = () => {

  const dispatch = useDispatch()
  const {page} = useSelector(state => state.atmosphere)

  useEffect(() => {
    dispatch( getAtmosphereConditions())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TableId/>}/>
        <Route path='/detail/:_id' element={<TableDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
