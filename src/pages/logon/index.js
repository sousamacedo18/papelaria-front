
import './styles.css'; // Import Bootstrap CSS here
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../server/api';

import Logo from '../../assets/img/logo.jpg'
export default function Logon(){
const navigate = useNavigate();
const [email,setEmail]=useState("");
const [senha,setSenha]=useState("");
const [id,setId] = useState(0);
const [nome,setNome] = useState("");



const log={
    email,
    senha
}
const logar =(e)=>{
e.preventDefault();
// let banco =JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
// let dadosnovos = banco.filter(item => item.email === email && item.senha === senha);
api.post("/usuario/login",log)
.then(resposta=>{
    if(resposta.status===200){
        alert(resposta.data.mensagem)
        navigate('/dashboard');
    }
    if(resposta.status===500){
        alert(resposta.data.mensagem)
       
    }
})


// if(dadosnovos.length>0){
//     //armazenandno dados do usuário logado no sistema.
//     setNome(dadosnovos[0].nome);
//     setId(dadosnovos[0].id);

//     sessionStorage.setItem("log-usuario",JSON.stringify(log));
//     navigate('/dashboard');
// }else{
//     alert("Dados incorretos!!!");
// }

}

    return(
    <div className="logon-container">
        <div className='logo'>
           <img src={Logo} />
        </div>
        <section className="form">
            <h1>Faça seu login</h1>
            <form onSubmit={logar} >
                <input placeholder="Email" 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                <input placeholder="Senha" type='password' 
                value={senha}
                onChange={e=>setSenha(e.target.value)}
                />
                <Button className='btn-entrar' type="submit">Entrar</Button>
               <p>Não tenho um conta? <a href="#">Novo Cadastro</a></p>
            </form>
        </section>
    </div>

   )

}