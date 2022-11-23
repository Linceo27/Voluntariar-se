import "./Index.css";

export default Catalogo;

function Catalogo() {
  const imgExemple = "https://via.placeholder.com/150";
  return (
    <div className="container-catalogo">
      <div className="bloco1">
        <h3>Projeto 1</h3>
        <img src={imgExemple} alt="descrição imagem" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
      <div className="bloco2">
        <h3>Projeto 2</h3>
        <img src={imgExemple} alt="descrição imagem" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
      <div className="bloco3">
        <h3>Projeto 3</h3>
        <img src={imgExemple} alt="descrição imagem" />
        <img src="image.png" alt="" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
      <div className="bloco4">
        <h3>Projeto 4</h3>
        <img src={imgExemple} alt="descrição imagem" />
        <p> Descrição Projeto</p>
        <button>Saiba Mais</button>
        <button>Seja Voluntário</button>
      </div>
    </div>
  );
}
