import SetaVoltar from '../components/SetaVoltar/SetaVoltar'
import './Cadastro.css'
export default Cadastro
function Cadastro(){
    
    return(
       
        <div id="modal" className="animar">
            <SetaVoltar/> 
            <h1>Cadastro</h1>
        <h1>Cadastro</h1>
        <label>
            Nome Completo:
        <input type="text"  />

        </label>
        <label>
            Data de Nascimento
        <input type="date" />

        </label>
        <label>Endereço
        <input type="text" />

        </label>
        <label>CPF 
        <input type="number" />

        </label>
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
        </div>
    
   
    
    )
}
   