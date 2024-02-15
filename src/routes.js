import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';


import Logon from './pages/logon';
import Dashboard from './pages/dashboard';

import Listausuario from './pages/listarUsuario';
import Listaproduto from './pages/listarProduto';
import Listaentrada from './pages/listarEntrada';
import Listaestoque from './pages/listarEstoque';
import Listasaida from './pages/listarSaida';

import Cadastrousuario from './pages/cadastroUsuario';
import Cadastroproduto from './pages/cadastroProduto';
import Cadastroentrada from './pages/cadastroEntrada';
import Cadastrosaida from './pages/cadastroSaida';

import Editarusuario from './pages/editarUsuario';
import Editarproduto from './pages/editarProduto';



    
export default function Rotas(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Logon />} />
                <Route  path="/dashboard" element={<Dashboard />} />

                <Route path="/listausuario" element={<Listausuario />} />
                <Route path="/listaproduto" element={<Listaproduto />} />
                <Route path="/listaentrada" element={<Listaentrada />} />
                <Route path="/listaestoque" element={<Listaestoque />} />
                <Route path="/listasaida" element={<Listasaida />} />

                <Route path="/cadastrousuario" element={<Cadastrousuario />} />
                <Route path="/cadastroproduto" element={<Cadastroproduto />} />
                <Route path="/cadastroentrada" element={<Cadastroentrada />} />
                <Route path="/cadastrosaida" element={<Cadastrosaida />} />

                <Route path="/editarusuario/:id" element={<Editarusuario />} />
                <Route path="/editarproduto/:id" element={<Editarproduto />} />
            </Routes>
       
       </BrowserRouter>

    )
}