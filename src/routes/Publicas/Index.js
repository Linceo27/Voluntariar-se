//importanto as rotas e renomeando o BrowserRouter para Router e o antigo switch agora é routes, que permite apenas chamar uma única rota na página
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home/Index'
import Educacao from '../../Pages/Educacao/Educacao'
import Emprego from '../../Pages/Emprego/Emprego'
import MeioAmbiente from '../../Pages/MeioAmbiente/MeioAmbiente'
import Moradia from '../../Pages/Moradia/Moradia'
import Cadastro from "../../Pages/Cadastro/Cadastro";
import LoginPage from '../../Pages/Login/LoginPage'


export default function RotasPublicas() {
  return (
    //o path leva até o caminho, a rota raiz é a barra e o elemento deve ser colocado entre chaves e < > porque senão não é reconhecido
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Educacao" element={<Educacao />} />
          <Route path="/Emprego" element={<Emprego />} />
          <Route path="/MeioAmbiente" element={<MeioAmbiente />} />
          <Route path="/Moradia" element={<Moradia />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}