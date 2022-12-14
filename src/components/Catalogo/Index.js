import "./Index.css";
import exemplo1 from "../../assets/exemplo1.png"
import exemplo2 from "../../assets/exemplo2.png"
import exemplo3 from "../../assets/exemplo3.png"
import exemplo4 from "../../assets/exemplo4.png"

export default Catalogo;

function Catalogo() {
  const ex1 = exemplo1
  const ex2 = exemplo2
  const ex3 = exemplo3
  const ex4 = exemplo4

  return (
    <div className="container-catalogo">
      <div className="bloco1">
        <h3>Projeto 1</h3>
        <img id = "img-catalogo-home" src={ex1} alt="descrição imagem" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
      <div className="bloco2">
        <h3>Projeto 2</h3>
        <img  id = "img-catalogo-home" src={ex2} alt="descrição imagem" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
      <div className="bloco3">
        <h3>Projeto 3</h3>
        <img id = "img-catalogo-home" src={ex3} alt="descrição imagem" />
        <img src="image.png" alt="" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
      <div className="bloco4">
        <h3>Projeto 4</h3>
        <img id = "img-catalogo-home" src={ex4} alt="descrição imagem" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
    </div>
  );
}
