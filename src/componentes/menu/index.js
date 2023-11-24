import './styles.css';
import {Link} from 'react-router-dom';
export default function Menu(){
    return(
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="/listausuario" className='link'>Usuário</Link>
                <Link to="/produto" className='link'>Produto</Link>
            </nav>
        </div>
    )
}