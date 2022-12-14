import "./Style.css";
import logo from "../../assets/logo.png";
import SubHeader from "../../components/SubHeader/Index";
import Catalogo from "../../components/Catalogo/Index";
import Informacoes from "../../components/Informações/Informacoes";
import Modal from "../../components/Modal/Index"

export default function Home() {
  const logoHome = logo;
  return (
    <div  className="container-home-geral">
      <div  className="container-home">
        <div className="container-header">
          <img id="logo" src={logoHome} alt="Logo Voluntariar-se" />
          <h1 id="header-titulo">VOLUNTARIAR-SE</h1>
        </div>
        <div id="container-subheader-home">
          <SubHeader />
        </div>
      </div>
      <div id="corpo">
        <div id="container-catalogo-home">
          <Catalogo />
        </div>
        <div id="container-informações-home">
          <br>
          </br>
        </div>
      </div>
      <Modal/>
      
    </div>
  );





  
}

/*import "./Style.css";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/Index";
import SubHeader from "../../components/SubHeader/Index";
import Catalogo from "../../components/Catalogo/Index";
import Informacoes from "../../components/Informações/Informacoes";

export default function Home() {
  const logoImage = logo;
  return (
    <div className="container-home">
      <header>
        <div id="container-header">
          <h1>
          <span id="titulo-header">VOLUNTARIAR-SE</span>
          </h1>
          <img id="logo" src={logoImage} alt="Logo Voluntariar-se" />
        </div>
      </header>
      <Header />
      <SubHeader />
      <Catalogo />
      <Informacoes />
    </div>
  );
}*/
