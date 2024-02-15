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

export default function Listaestoque(){
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
    function formatReal(valor) {
      let valorFormatado = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
      valorFormatado = valorFormatado.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4'); // Formata com pontos e vírgulas
      return `R$ ${valorFormatado}`;
    }

    function mostrardados()
    {
      setBanco(JSON.parse(localStorage.getItem("cd-estoques") || "[]"));
    }
    function mostrarnome(idproduto){
      let nome= "";
       const listarproduto = JSON.parse(localStorage.getItem("cd-produtos") || "[]");
       listarproduto.
                    filter(value => value.id ==idproduto).
                    map(value => {
                     
                    nome=value.descricao;
    
                        
    
                  })
            return nome;
            
      }
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Estoque',
        message: 'Deseja realmente excluir o estoque desse produto?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              let dadosnovos = banco.filter(item => item.id !== id);
              localStorage.setItem("cd-estoques", JSON.stringify(dadosnovos));
              setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
              alert(`Você apagou o estoque id:${id}`);
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
        <Head title="Lista de Estoque de Produtos" />
        <div>
        <Link to="/cadastroproduto" className='btn-novo'>Novo Cadastro</Link>
        </div>
        <table className="table">
           <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th></th>
                <th></th>
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{mostrarnome(linha.id_produto)}</td>    
                    <td>{linha.qtde}</td>    
                    <td>{formatReal(linha.valor_unitario)}</td>    
         
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