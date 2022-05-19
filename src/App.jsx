import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

import RutaProtegida from './layout/RutaProtegida';
import WebLayout from './layout/WebLayout';

import Login from './paginas/Login';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<WebLayout />}>

          </Route>



          <Route path='/admin' element={<RutaProtegida />}>
            <Route index element={<Login />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
