import './Cadastro.css'
import SetaVoltar from '../../components/SetaVoltar/SetaVoltar'
import BGLoginCadastro from "../../../src/components/Layout/BGLoginCadastro/index"
export default Cadastro
function Cadastro(){
    return(
       <div className='cointainer-cadastro'>
           
            <div id="modal" className="animar">
                <SetaVoltar/>
                <BGLoginCadastro>
            <h1>Cadastro</h1>
            <label>Nome Completo</label>
            <input type="text" />
            <label>Data de Nascimento</label>
            <input type="date" />
            <label>Endereço</label>
            <input type="text" />
            <label>CPF</label>
            <input type="number" />
            <label>Número de celular</label>
            <input type="number" />
            <label>Email</label>
            <input type="email" />
            <label>Confirmar Email</label>
            <input type="text" />
            <label>Senha</label>
            <input type="password" />
            <label>Confirmar Senha</label>
            <input type="password" />
            <button>Cadastrar</button>
            </BGLoginCadastro>
            </div>
            <br>


            
            </br>
       </div>

    
   
    
    )
}