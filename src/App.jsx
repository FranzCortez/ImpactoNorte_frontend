import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RutaProtegida from './layout/RutaProtegida';
import WebLayout from './layout/WebLayout';

import Login from './paginas/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebLayout />}>

        </Route>

        <Route path='/admin' element={<RutaProtegida />}>
          <Route index element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
