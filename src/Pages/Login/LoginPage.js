import "./LoginPage.css"
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import SetaVoltar from "../../components/SetaVoltar/SetaVoltar"
import { useState } from "react"
import BGLoginCadastro from "../../../src/components/Layout/BGLoginCadastro/index"

export default function Login (){
   const [email, setEmail] = useState ("")
   const [password, setPassword] = useState ("")

   function Verificador(e){
    //e.target.
    console.log("enviou")
   }

    
return(
<BGLoginCadastro>
<SetaVoltar/>

    <form className="login-form">
      <span className="login-form-title"> Bem vinda (o) de Volta! </span>

      <span className="login-form-title">
        <img src={logo} alt="Voluntariar-se" />
      </span>

      <div className="wrap-input">
        <input
          className={email !== "" ? "has-val input" : "input"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Email"></span>
      </div>

      <div className="wrap-input">
        <input
          className={password !== "" ? "has-val input" : "input"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Senha"></span>
      </div>

      <div className="container-login-form-btn">
        <button className="login-form-btn">Login</button>
      </div>

      <div className="text-center">
        <span className="txt1">Ainda não se cadastrou? </span>
        <Link className="txt2"  to="/Cadastro">Cadastrar</Link>
       
      </div>
    </form>
    </BGLoginCadastro>
);
}
