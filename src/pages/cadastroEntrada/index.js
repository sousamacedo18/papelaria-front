import React,{useEffect, useState} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import Head from '../../componentes/Head';




export default function Cadastroentrada(){
  const navigate =useNavigate();
  const [id_produto,setId_produto]  = useState("");
  const [qtde,setQtde]  = useState("");
  const [valor_unitario,setValor_unitario]  = useState("");
  const [data_entrada,setData_entrada]  = useState("");
  const [produto,setProduto] = useState([]);
  
  const entrada={
      id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
      id_produto,
      qtde,
      valor_unitario,
      data_entrada
  }
  
useEffect(()=>{
  mostrarproduto();
},[])

  function salvardados(e){
    e.preventDefault();

  let i=0;
  if(id_produto=="")
  i++;
 else if(qtde=="" || qtde==0)
  i++;
 else if(valor_unitario=="" || valor_unitario==0)
 i++;
 else if(data_entrada=="")
 i++;
if(i==0)
 {
   const banco =JSON.parse(localStorage.getItem("cd-entradas") || "[]");
   banco.push(entrada);
   localStorage.setItem("cd-entradas",JSON.stringify(banco));
   alert("Entrada salvo com sucesso");
   navigate('/listaentrada');
 }else{
  alert("Verifique! Há campos vazios!")
 }
  }
  function mostrarproduto(){
   
     setProduto(JSON.parse(localStorage.getItem("cd-produtos") || "[]"));
 
    }
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Entrada" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={id_produto}
            onChange={e=>setId_produto(e.target.value)}
             placeholder='Digite o id do produto'
              />
              <select value={id_produto} onChange={e=>setId_produto(e.target.value)}  >
                <option>Selecione um produto</option>
                {
                  produto.map((linha)=>{
                    return(
                      <option value={linha.id}>{linha.descricao}</option>
                    )
                  })
                }
              </select>
            <input 
                type='number' 
                value={qtde}
                onChange={e=>setQtde(e.target.value)}
                placeholder='Digite a quantidade'
             />
            <input 
                    type='number' 
                    value={valor_unitario}
                    onChange={e=>setValor_unitario(e.target.value)}
                    placeholder='Digite o valor unitário' 
            />
            <input 
                    type='date' 
                    value={data_entrada}
                    onChange={e=>setData_entrada(e.target.value)}
                    placeholder='Data da Entrada' 
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