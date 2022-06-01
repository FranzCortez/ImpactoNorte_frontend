import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

import RutaProtegida from './layout/RutaProtegida';
import WebLayout from './layout/WebLayout';

import Navbar from './components/Navbar';
import Login from './paginas/Login';
import Home from './paginas/Home';

function App() {

  return (

    <BrowserRouter>
      <AuthProvider>
        <Navbar value={false} />
        <Routes>
          
          <Route path='/' element={<WebLayout />}>

          </Route>

          <Route path='/admin' element={<RutaProtegida />}>
            <Route index element={<Login />}/>
            <Route path='home' element={<Home />}/>
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
