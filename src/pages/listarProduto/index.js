import React,{useState,useEffect} from 'react';
import '../../pages/global.css';
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import { Bs5Circle } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom';
import Head from '../../componentes/Head';
import { useNavigate} from 'react-router-dom';

export default function Listaproduto(){
const [dados,setDados] = useState([]);
const [banco,setBanco] = useState([]);
const navigate=useNavigate();
    // const dados=[
    //     {id:1,nome:"Carlos",email:"carlos@gmail.com",senha:"123"},
    //     {id:2,nome:"Felipe",email:"felipe@gmail.com",senha:"321"},
    //     {id:3,nome:"Nilson",email:"nilson@gmail.com",senha:"321"},

    // ]
    useEffect(()=>{
      mostrardados();
    },[])

    function mostrardados()
    {
      setBanco(JSON.parse(localStorage.getItem("cd-produtos") || "[]"));
    }
  
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Produto',
        message: 'Deseja realmente excluir esse Produto?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              let dadosnovos = banco.filter(item => item.id !== id);
              localStorage.setItem("cd-produtos", JSON.stringify(dadosnovos));
              setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
              alert(`Você apagou o produto id:${id}`);
            }
            
          },
          {
            label: 'Não',
            onClick: () => alert('Click No')
          }
        ]
      });
    };
  

   return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Lista de Produto" />
        <div>
        <Link to="/cadastroproduto" className='btn-novo'>Novo Cadastro</Link>
        </div>
        <table className="table">
           <tr>
                <th>Id</th>
                <th>Status</th>
                <th>Descrição</th>
                <th>Est. Minímo</th>
                <th>Est. Máximo</th>
                <th></th>
                <th></th>
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{linha.status}</td>    
                    <td>{linha.descricao}</td>    
                    <td>{linha.estoque_minimo}</td>    
                    <td>{linha.estoque_maximo}</td>    
                    <td className='botoes'> 
                    <Link to={`/editarproduto/${linha.id}`}>
                      <FiEdit size={18} color='#3a5795'  /> 
                    </Link> 
                    </td>    
                    <td className='botoes'> 
                          <FiTrash 
                          size={18} 
                          color='red'
                          onClick={(e)=>apagar(linha.id)} 
                          /> 
                    </td>    
                    
                  </tr>  
                )
               }) 
            }

        </table>
        </div>
    </div>

   )

}