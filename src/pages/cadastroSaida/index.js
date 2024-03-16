import React,{useEffect, useState} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import Head from '../../componentes/Head';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import api from '../../server/api'





export default function Cadastrosaida(){
  const navigate =useNavigate();
  const [id_produto,setId_produto]  = useState("");
  const [qtde,setQtde]  = useState("");
  const [valor_unitario,setValor_unitario]  = useState("");
  const [data_saida,setData_sainda]  = useState("");
  const [produto,setProduto] = useState([]);
  const [qtd_estoque,setQtd_estoque] =useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const saida={
      id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
      id_produto,
      qtde,
      valor_unitario,
      data_saida
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

  // function atualizarEstoque(idProduto, quantidade, valor) {
  //   const estoque = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
  //   const produtoExistente = estoque.find(item => item.id_produto === idProduto);

  //   if (produtoExistente) {
  //     produtoExistente.qtde += Number(quantidade);
  //   } else {
  //     estoque.push({
  //       id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
  //       id_produto,
  //       qtde: quantidade,
  //       valor
  //     });
  //   }

  //   localStorage.setItem("cd-estoques", JSON.stringify(estoque));
  // }

 const verificarestoque=(qtd)=>{
  setQtde(qtd);
  // if(qtd>qtd_estoque){
  //       alert("Quantidade digitada é maior que a quantidade no estoque!");
  //       return false;
  //     }else{
  //       setQtde(qtd);
  //       return true;
  //     }
  }

  function atualizarEstoque(idProduto, quantidade, valor) {
    const estoque = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
    const produtoExistente = estoque.find(item => item.id_produto === idProduto);
  
    if (produtoExistente) {
      const soma = parseFloat(produtoExistente.qtde) - parseFloat(quantidade);
      const dadosNovos = estoque.map(item => {
        if (item.id_produto === idProduto) {
          return {
            id: item.id,
            id_produto: item.id_produto,
            qtde: soma,
            valor_unitario: valor
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("cd-estoques", JSON.stringify(dadosNovos));
    } else {
      const dadosEstoque = {
        id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
        id_produto,
        qtde: parseFloat(quantidade),
        valor_unitario: valor
      };
      estoque.push(dadosEstoque);
      localStorage.setItem("cd-estoques", JSON.stringify(estoque));
    }
  }
  
  
useEffect(()=>{
  mostrarproduto();
},[])

useEffect(() => {
  let produtos = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
 if (id_produto!==""){


  let linha = produtos.find((produto) => produto.id_produto === id_produto);

  if (linha) {
    setValor_unitario(linha.valor_unitario);
    setQtd_estoque(linha.qtde);

  }
}
}, [id_produto]);


  function salvardados(e){
    e.preventDefault();

  let i=0;
  if(id_produto==="")
  i++;
 else if(qtde==="" || qtde===0)
  i++;
 else if(valor_unitario==="" || valor_unitario===0)
 i++;
 else if(data_saida==="")
 i++;
if(i===0)
 {
    api.post("/saida",saida,
    {headers:{"Content-Type":"application/json"}})
    .then(function(response){
      console.log(response.data)
      alert(response.data.mensagem);
      navigate('/listasaida');
    })
    
    


 }else{
  alert("Verifique! Há campos vazios!")
 }
  }
  function mostrarproduto(){
   
    // setProduto(JSON.parse(localStorage.getItem("cd-estoques") || "[]"));
    api.get("/produto")
    .then((resposta)=>{
       setProduto(resposta.data.produtos)
    })
    }
  return(
    
    <div className="dashboard-container">

        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Saídas" />
        <div className='form-container'>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Título do Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Conteúdo do Modal...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={id_produto}
            onChange={e=>setId_produto(e.target.value)}
             placeholder='Digite o id do produto'
              />
              <Button variant="primary" onClick={handleShow}>
                Abrir Modal
              </Button>
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
              <p>
                Quantidade no estoque 
                <strong>
                {
                qtd_estoque
              }
                  </strong> 

              </p>

            <input 
                type='number' 
                value={qtde}
                onChange={e=>verificarestoque(e.target.value)}
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
                    value={data_saida}
                    onChange={e=>setData_sainda(e.target.value)}
                    placeholder='Data da Saída' 
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