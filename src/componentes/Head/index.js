import {FiLogOut} from 'react-icons/fi';
import './styles.css';

export default function Head({title}){


   return(
    <div className="head">

        <h2>{title}</h2>
        <FiLogOut size={24} color='red' />
    </div>
   )    
}