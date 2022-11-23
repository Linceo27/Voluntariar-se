import SetaVoltar from "../../components/SetaVoltar/SetaVoltar"
import "./LoginPage.css"
import {FaGooglePlusG} from 'react-icons/fa'
import Login from '../../components/Login/Login'
export default LoginPage

function LoginPage(){
    return(
        <div className="container-LoginPage">
           <SetaVoltar/>
           <Login/>
           <FaGooglePlusG/>

        </div>
    )
}