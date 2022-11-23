import "./Index.css";
import nicole from "../../assets/nicole.png";
import pedro from "../../assets/pedro.png";
import thaif from "../../assets/thaif.png";

export default Fundadores;

function Fundadores() {
  return (
    <div>
      <main>
        <label for="fixo-fundadores">
          <h3>Conheça os Idealizadores:</h3>
        </label>
        <div>
          <div className="container-fundadores">
            <div className="Nicole">
              <img className="nicole-imagem" src={nicole} alt="" />
              <p>
                Nome: Nicole Gomes <br /> Bio:{" "}
              </p>
            </div>
            <div className="Pedro">
              <img className="pedro-imagem" src={pedro} alt="" />
              <p>
                Nome: Pedro Vasconcelos <br /> Bio:{" "}
              </p>
            </div>
            <div className="Thaif">
              <img className="thaif-imagem" src={thaif} alt="" />
              <p>
                Nome: Thaif <br /> Bio:{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
