import './SetaVoltar.css'
import {Link} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

export default SetaVoltar

function SetaVoltar(){
    return(
        <div className='container-seta-voltar'>
            <Link to = '/'>
                <button className='button-seta-voltar'> <FaArrowLeft/> </button>
            </Link>
        </div>
    )
}