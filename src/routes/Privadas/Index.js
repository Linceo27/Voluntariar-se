import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaUsuario from "../../Pages/PaginaUsuario/PaginaUsuario"


//rotas privadas para o usuario alterar o perfil, acessar os projetos que ele colaborou/ quer colaborar
// rotas para fazer alterações cadastrais 
export default function RotasPrivadas (){
    return(
        <Router>
            <Routes>
                <Route path = "/Causas" element = {<Private Item = {Causas}/>}/>
                <Route path = "/MinhaPagina" element = {<Private Item = {MinhaPagina}/>}/>
                <Route path = "/AlterarFotoPerfil" element = {<Private Item = {AlterarFotoPerfil}/>}/>
                <Route path = "/AlteracaoCadastral" element = {<Private Item = {AlteracaoCadastral}/>}/>
                <Route path = "/PaginaUsuario" element={<Private Item = {PaginaUsuario}/>}/>
            </Routes>
        </Router>
    )
}