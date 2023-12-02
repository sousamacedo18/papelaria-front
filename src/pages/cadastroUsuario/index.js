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

  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Usuário" />
        <div className='form-container'>
        <form className='form-cadastro' >
            <input 
            type='text'
            value={nome}
            onChange={e=>setNome(e.target.value)}
             placeholder='Digite o nome do usuário'
              />
            <input type='email' placeholder='Digite o email' />
            <input type='password' placeholder='Digite a senha' />
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