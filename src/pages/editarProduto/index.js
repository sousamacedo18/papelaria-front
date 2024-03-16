import React,{useState, useEffect} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate,useParams} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Editarproduto(){
  let { id } = useParams();
  const navigate =useNavigate();
  const [status,setStatus]  = useState("");
  const [descricao,setDescricao]  = useState("");
  const [estoque_maximo,setEstoque_maximo]  = useState("");
  const [estoque_minimo,setEstoque_minino]  = useState("");
  const [banco,setBanco] = useState([]);

  
  const produto={    
     id, 
      status,
      descricao,
      estoque_minimo,
      estoque_maximo
  }
  useEffect(()=>{
  
      mostrardados(id);


   
  },[])
  async function mostrardados(idu) {
    api.get(`/produto/${idu}`)
    .then(res=>{
      console.log(res.data.produto);
      if(res.status===200){
        setStatus(res.data.produto[0].status);
        setDescricao(res.data.produto[0].descricao);
        setEstoque_minino(res.data.produto[0].estoque_minimo);
        setEstoque_maximo(res.data.produto[0].estoque_maximo);
      }
    })
     }


     function salvardados(e) {
      e.preventDefault();
  
      let i = 0;
      
      if (status === "") {
          i++;
      } else if (descricao === "") {
          i++;
      } else if (estoque_maximo === 0 || estoque_maximo === "") {
          i++;
      } else if (estoque_minimo === 0 || estoque_minimo === "") {
          i++;
      } 
  
      if (i === 0) {
          api.put(`/produto/${id}`, produto, {
                  headers: {
                      "Content-Type": "application/json"
                  }
              })
              .then(function(response) {
                  console.log(response.data);
                  alert(response.data.mensagem);
                  navigate('/listaproduto');
              })
              .catch(function(error) {
                  console.error(error);
                  alert("Erro ao tentar salvar os dados.");
              });
      } else {
          alert("Verifique! Há campos vazios ou inválidos!");
      }
  }
  
 
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Editar Produto" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={status}
            onChange={e=>setStatus(e.target.value)}
             placeholder='Digite o status'
              />
            <input 
                type='text' 
                value={descricao}
                onChange={e=>setDescricao(e.target.value)}
                placeholder='Digite a descrição'
             />
            <input 
                    type='number' 
                    value={estoque_minimo}
                    onChange={e=>setEstoque_minino(e.target.value)}
                    placeholder='Digite a senha' 
            />
            <input 
                    type='number' 
                    value={estoque_maximo}
                    onChange={e=>setEstoque_maximo(e.target.value)}
                    placeholder='Digite a senha' 
            />
            
            <div className='acao'>
            <button className='btn-save'>
               <FaSave />
              Salvar
            </button>
            <button className='btn-cancel'>
            <MdCancel />
              Cancelar</button>
            </div>
        </form>
   
        </div>
        </div>
    </div>

   )

}