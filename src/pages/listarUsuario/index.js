import '../../pages/global.css';
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import { Bs5Circle } from "react-icons/bs";
export default function Listausuario(){

    const dados=[
        {id:1,nome:"Carlos",email:"carlos@gmail.com",senha:"123"},
        {id:2,nome:"Felipe",email:"felipe@gmail.com",senha:"321"},
        {id:3,nome:"Nilson",email:"nilson@gmail.com",senha:"321"},

    ]
   return(
    <div className="dashboard-container">
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <h1>Lista de Usuários</h1>
        <button className='btn-novo'>Novo Cadastro</button>
        <table className="table">
           <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th></th>
                <th></th>
            </tr>
            {
               dados.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{linha.nome}</td>    
                    <td>{linha.email}</td>    
                    <td className='botoes'> 
                      <FiEdit size={18} color='#3a5795'  />  
                    </td>    
                    <td className='botoes'> <FiTrash size={18} color='red' /> </td>    
                    
                  </tr>  
                )
               }) 
            }

        </table>
        </div>
    </div>

   )

}