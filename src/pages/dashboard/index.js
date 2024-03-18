import './styles.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import Head from '../../componentes/Head';


let usuario =JSON.parse(sessionStorage.getItem("log-usuario") || "[]");
export default function Dashboard(){
   return(
    <div className="dashboard-container">
        
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Página Inicial" />

        </div>
    </div>

   )

}