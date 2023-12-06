import React,{useState} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Head from '../../componentes/Head';

export default function Cadastrousuario(){

  const [nome,setNome]  = useState("");
  const [email,setEmail]  = useState("");
  const [senha,setSenha]  = useState("");
  
  const usuario={
      nome,
      email,
      senha
  }

  function salvardados(e){
    e.preventDefault();
   // console.log(usuario);
   const banco =JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
   banco.push(

    {
      nome,
      email,
      senha
    }
   );
   localStorage.setItem("cd-usuarios",JSON.stringify(banco));
  alert("Usuário salvo com sucesso");
  }
 
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Usuário" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={nome}
            onChange={e=>setNome(e.target.value)}
             placeholder='Digite o nome do usuário'
              />
            <input 
                type='email' 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder='Digite o email'
             />
            <input 
                    type='password' 
                    value={senha}
                    onChange={e=>setSenha(e.target.value)}
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