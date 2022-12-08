import BGLoginCadastro from "../../components/Layout/BGLoginCadastro";
import SetaVoltar from "../../components/SetaVoltar/SetaVoltar";
import logo from "../../assets/logo.png";
import "./Cadastro.css";
export default Cadastro;
function Cadastro() {
    const cpfInput = document.querySelector("#cpf-cadastro")

  return (
    <div>
      <SetaVoltar />
     
        <form method="post" className="form-cadastro">
          <img src={logo} alt="Voluntariar-se" />
          <span id="titulo-form-cadastro"> Preencha as suas Informações </span>
          <div className="input-cadastro">
            <label for = "Nome">Nome</label>
            <input name = "nome-cadastro" type = 'text' id="nome-cadastro" placeholder="Nome"/>
            <label for = "Sobrenome">Sobrenome</label>
            <input name = "sobrenome-cadastro" type = 'text' id="sobrenome-cadastro" placeholder="Sobrenome"/>
            <label for = "DataNascimento">Data de Nascimento:</label>
            <input name = "data-nascimento-cadastro" type = 'date' id="data-nascimento-cadastro"/>
            <label for = "CPF">CPF</label>
            <input name = "cpf-cadastro" autoComplete="off" maxLength={11} pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" type = 'text' id="cpf-cadastro" placeholder="cpf"/>
            <label for = "CEP">CEP:</label>
            <input name="cep-cadastro" type="text" maxLength={15}/>
            <div id="inputs-causas">
                <label for = "causasInteresse">Causas de Interesse</label>
                <input type="checkbox" value="Educação"  name="causas"/>Educação
                <input type="checkbox" value="Direitos Civis"  name="causas"/> Direitos Civis
                <input type="checkbox" value="Saúde"  name="causas"/>Saúde
                <input type="checkbox" value="Moradia"  name="causas"/> Moradia
            </div>
            <label for = "dataNascimento">Data Nascimento: <input name="dataNascimento" type="date"/> </label>

            
          </div>
        </form>
    </div>
  );
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
