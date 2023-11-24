import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Logon from './pages/logon';
import Dashboard from './pages/dashboard';
import Listausuario from './pages/listarUsuario';


export default function Rotas(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Logon />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/listausuario" element={<Listausuario />} />
            </Routes>
       
       </BrowserRouter>

    )
}