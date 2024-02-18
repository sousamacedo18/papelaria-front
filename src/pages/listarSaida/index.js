import React,{useState,useEffect} from 'react';
import '../../pages/global.css';
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import{ FiEdit,FiTrash,FiDelete, FiFilePlus }from "react-icons/fi";
import { Bs5Circle } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {Link} from 'react-router-dom';
import moment from 'moment';
import Head from '../../componentes/Head';
import { useNavigate} from 'react-router-dom';

export default function Listaentrada(){
const [dados,setDados] = useState([]);
const [banco,setBanco] = useState([]);
const navigate=useNavigate();

    useEffect(()=>{
      mostrardados();
    },[])

    function mostrardados()
    {
      setBanco(JSON.parse(localStorage.getItem("cd-saidas") || "[]"));
    }

    function formatReal(valor) {
      let valorFormatado = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
      valorFormatado = valorFormatado.replace(/(\d{1,})(\d{2})$/, '$1,$2'); // Formata com vírgula
      valorFormatado = valorFormatado.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // Adiciona pontos
    
      return `R$ ${valorFormatado}`;
    }
    function formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    }

  
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Entrada',
        message: 'Deseja realmente excluir essa Saída?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              let dadosnovos = banco.filter(item => item.id !== id);
              localStorage.setItem("cd-saidas", JSON.stringify(dadosnovos));
              setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
              alert(`Você apagou a saída de id:${id}`);
            }
            
          },
          {
            label: 'Não',
            onClick: () => alert('Click No')
          }
        ]
      });
    };
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

   return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Lista de Saída" />
        <div>
        <Link to="/cadastrosaida" className='btn-novo'>Novo Cadastro</Link>
        </div>
        <table className="table">
           <tr>
                <th>Id</th>
                <th>Produto </th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Data Saída</th>
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
                    <td>{formatarData(linha.data_saida)}</td>    
                    <td className='botoes'> 
                    <Link to={`/editarentrada/${linha.id}`}>
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