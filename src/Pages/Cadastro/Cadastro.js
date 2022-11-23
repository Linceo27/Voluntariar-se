import BGLoginCadastro from '../../components/Layout/BGLoginCadastro'
import SetaVoltar from '../../components/SetaVoltar/SetaVoltar'
import './Cadastro.css'
export default Cadastro
function Cadastro(){
    return(
    <div><SetaVoltar/> 
    <BGLoginCadastro>
<input type = "text" value = "nome" placeholder = "Nome"/>
    </BGLoginCadastro></div>
    )
}
   /*<div>
        <SetaVoltar/> 
            <div id="modal" className="animar">
            <h1>Cadastro</h1>
            <form id='formCadastro' action="http://localhost:3001/Home" method='post'>
                <div>
                    <label>
                        Nome Completo:
                    <input type="text"  />
                    </label>
                </div>
                <div>
                    <label>
                        Data de Nascimento
                    <input type="date" />
                    </label>
                </div>
                <div>
                    <label> CEP
                    <input type="text" title="Digite um CEP no formato: xxx.xx-xxx" pattern="(\d{5}\-?\d{3})"  />
                    </label>
                </div>
                <div>
                    <label>CPF
                    <input type="text" title="Digite um CPF no formato: xxx.xxx.xxx-xx" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" />
                    </label>
                </div>
                <div>
                    <label>Número de celular</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Confirmar Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirmar Senha</label>
                    <input type="password" />
                </div>
                <div>
                    <label for = 'imagem-ong'>Anexe aqui alguma imagem de sua ong</label>
                    <input type = 'file'   />
                </div>
               <div>
                   <div>
                   <button type = 'submit'>Cadastrar</button>
                   <button type = 'reset'>Limpar</button>
                    </div>
               </div>
            </form>
            </div>
       </div>

    
   */ 