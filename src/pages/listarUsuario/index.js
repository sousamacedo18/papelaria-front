import '../../pages/global.css';
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'

export default function Listausuario(){
   return(
    <div className="dashboard-container">
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <h1>Lista de Usuários</h1>
        </div>
    </div>

   )

}