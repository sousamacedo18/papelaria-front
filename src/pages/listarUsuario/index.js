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
import api from '../../server/api';

export default function Listausuario(){
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
      consultarCEP("77817500")
      .then(resultado => {
        console.log('Dados do CEP:', resultado);
      });
    },[])

    async function consultarCEP(cep){
     
        // Substitua a URL base pela URL específica do ViaCEP com o CEP desejado
        const url = `https://viacep.com.br/ws/${cep}/json/`;
      
        // Utilizando o método fetch para fazer a requisição GET
        return fetch(url)
          .then(response => {
            // Verifica se a requisição foi bem-sucedida (status 2xx)
            if (!response.ok) {
              throw new Error(`Erro ao consultar o CEP: ${response.status}`);
            }
      
            // Parseia o JSON da resposta
            return response.json();
          })
          .then(data => {
            // Retorna os dados do CEP
            return data;
          })
          .catch(error => {
            console.error('Erro na requisição:', error);
          });
      }
      
   
    
    function mostrardados()
    {
      //setBanco(JSON.parse(localStorage.getItem("cd-usuarios") || "[]"));
       api.get('/usuario')
            .then(res=>{
              console.log(res.data.usuarios)
              setBanco(res.data.usuarios)
            })
    }
  
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Usuário',
        message: 'Deseja realmente excluir esse usuário?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              // let dadosnovos = banco.filter(item => item.id !== id);
              // localStorage.setItem("cd-usuarios", JSON.stringify(dadosnovos));
              // setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
             api.delete(`/usuario/${id}`)
             .then(res=>{
              if(res.status===200){
                alert(`Você apagou o usuário id:${id}`);
                mostrardados();
              }else{
                alert("houve um problema no servidor")
              }
             })
              
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
        <Head title="Lista de Usuários" />
        <div>
        <Link to="/cadastrousuario" className='btn-novo'>Novo Cadastro</Link>
        </div>
        <table className="table">
           <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th></th>
                <th></th>
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{linha.nome}</td>    
                    <td>{linha.email}</td>    
                    <td className='botoes'> 
                    <Link to={`/editarusuario/${linha.id}`}>
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