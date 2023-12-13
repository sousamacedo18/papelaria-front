import {FiLogOut} from 'react-icons/fi';
import {FaReply} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; //
import './styles.css';

export default function Head({title}){
 const navigate = useNavigate();
   function retornar(){
     navigate(-1);
   }
   function sair(){
      navigate("/");
   }
  const confirmarsaida=()=> {
      confirmAlert({
          message: "Deseja realmente sair?",
          buttons: [
         {
             label: 'Sim',
             onClick: () => {
               sair();
            }
         },
         {
            label: 'Não',
           // onClick: () => alert('Click No')
          }
          ]
      });
   
       };

   return(
    <div className="head">
       <FaReply size={24} onClick={retornar} color='blue' />
        <h2>{title}</h2>
        <FiLogOut size={24} onClick={confirmarsaida} color='red' />
    </div>
   )    
}