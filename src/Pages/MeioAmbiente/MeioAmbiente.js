import Catalogo from "../../components/Catalogo/Index";
import SetaVoltar from "../../components/SetaVoltar/SetaVoltar";
import "./MeioAmbiente.css";
export default MeioAmbiente;

function MeioAmbiente() {
  return (
    <div className="container-meio-ambiente">
      <SetaVoltar />
      <h1>MEIO AMBIENTE</h1>
      <Catalogo />
    </div>
  );
}
