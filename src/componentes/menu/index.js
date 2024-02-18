import './styles.css';
import {Link} from 'react-router-dom';
import { FiUser, FiTag, FiTruck,FiShoppingCart,FiGrid } from "react-icons/fi";
export default function Menu(){
    return(
        <div>
           
            <nav>
                <Link to="/listausuario" className='link'>   <FiUser className="icon-menu" size={24} />Usuário</Link>
                <Link to="/listaproduto" className='link'> <FiTag className="icon-menu" size={24} />Produto</Link>
                <Link to="/listaentrada" className='link'><FiTruck className="icon-menu" size={24} />Entrada</Link>
                <Link to="/listaestoque" className='link'><FiGrid className="icon-menu" size={24} />Estoque</Link>
                <Link to="/listasaida" className='link'> <FiShoppingCart className="icon-menu" size={24} />Saída</Link>
            </nav>
        </div>
    )
}