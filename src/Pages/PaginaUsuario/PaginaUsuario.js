import './Style.css'
import Cadastro from '../Cadastro/Cadastro'
import { useState } from 'react'
export default function PaginaUsuario({nome,endereço}){
 const nomeUserPage = useState ('')
return(
    <div className='container-pagina-usuario'>
        <img id = 'foto-usuario'src = {uploadFoto} alt = 'Foto do usuário'/>
        <h2>{nome}</h2>
        <div id='dados-usuario'>
            <button>Editar Perfil</button>
        </div>
    </div>
)
}