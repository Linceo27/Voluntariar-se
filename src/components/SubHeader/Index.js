import "./Index.css";
import { Link } from "react-router-dom";
export default SubHeader;

function SubHeader() {
  return (
    <div className="container-subheader">
      <div>
        <form className="container-subheader-busca">
          <input type="text" placeholder="Digite o nome do projeto" />
          <input type="submit" value="Buscar" />
        </form>
      </div>
      <div className="container-subheader-bottoes">
        <div className="container-subheader-botoes">
          <Link to="/Educacao">
            <button className="sub-button">Educação</button>
          </Link>
          <Link to="/MeioAmbiente">
            <button className="sub-button">Meio Ambiente</button>
          </Link>
          <Link to="/Moradia">
            <button className="sub-button">Moradia</button>
          </Link>
          <Link to="/Emprego">
            <button className="sub-button"> Emprego </button>
          </Link>
          <Link to="/Cadastro">
            <button className="sub-button">Cadastre-se</button>
          </Link>
          <Link to="/LoginPage">
            <button className="sub-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
