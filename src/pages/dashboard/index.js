import './styles.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'

let usuario =JSON.parse(sessionStorage.getItem("log-usuario") || "[]");
export default function Dashboard(){
   return(
    <div className="dashboard-container">
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <h1>Página Principal</h1>
        <h1>{usuario.email}</h1>
        </div>
    </div>

   )

}