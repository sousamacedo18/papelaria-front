import './styles.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'

export default function Dashboard(){
   return(
    <div className="dashboard-container">
        <div className='menu'>
        <h1>Menu</h1>
        <Menu />
        </div>
        <div className='principal'>
        <h1>Página Principal</h1>
        </div>
    </div>

   )

}