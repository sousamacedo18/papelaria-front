import './styles.css';
import {Link} from 'react-router-dom';
export default function Menu(){
    return(
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="/listausuario" className='link'>Usuário</Link>
                <Link to="/listaproduto" className='link'>Produto</Link>
                <Link to="/listaentrada" className='link'>Entrada</Link>
                <Link to="/listaestoque" className='link_estoque'>Estoque</Link>
                <Link to="/listasaida" className='link'>Saída</Link>
            </nav>
        </div>
    )
}