import Fundadores from "../Fundadores/Index";
import "./SobreNos.css";

export default SobreNos;

function SobreNos() {
  return (
    <div className="container-sobrenos">
      <label for="fixo-sobrenos">
        <h2 id="fixo-sobrenos-titulo">Sobre Nós:</h2>
      </label>
      <input type="checkbox" id="fixo-sobrenos" />

      <div id="texto-sobrenos">
        <p>
          Um certo dia, uma dos três criadores percebeu o quão dificultoso é
          achar ambientes apenas para voluntários e ONG's na Cidade do Recife,
          foi aí que surgiu o VoluntaRecife, um projeto sem fins lucrativos onde
          o principal intuito é unir possíveis voluntários e ONG's, ampliando a
          difusão de direitos e atividades educacionais que os projetos sociais
          levam para a sociedade Recifese.
        </p>{" "}
        <br />
        <Fundadores />
      </div>
    </div>
  );
}
