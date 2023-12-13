import React,{useState, useEffect} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate,useParams} from 'react-router-dom';
import Head from '../../componentes/Head';

export default function Editarusuario(){
  const id = useParams.id;
  const navigate =useNavigate();
  const [nome,setNome]  = useState("");
  const [email,setEmail]  = useState("");
  const [senha,setSenha]  = useState("");
  const [banco,setBanco] = useState([]);
  
  
  const usuario={     
      nome,
      email,
      senha
  }
  useEffect(()=>{
    mostrardados();
  },[])
  function mostrardados(){
    setBanco(JSON.parse(localStorage.getItem("cd-usuarios") || "[]"));
    let dadosnovos = banco.filter(item => item.id == id);
    setNome(dadosnovos.nome);
    setEmail(dadosnovos.email);
    setSenha(dadosnovos.senha);

  }


  function salvardados(e){
    e.preventDefault();

  let i=0;
  if(nome=="")
  i++;
 else if(email=="")
  i++;
 else if(senha=="")
 i++;
if(i==0)
 {
   const banco =JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
   banco.push(usuario);
   localStorage.setItem("cd-usuarios",JSON.stringify(banco));
   alert("Usuário salvo com sucesso");
   navigate('/listausuario');
 }else{
  alert("Verifique! Há campos vazios!")
 }
  }
 
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Editar Usuário" />
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