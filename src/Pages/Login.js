import SetaVoltar from "../components/SetaVoltar/SetaVoltar"
import {FaGooglePlusG} from 'react-icons/fa'
export default Login 

function Login(){
    return(
        <div>
            <SetaVoltar/>
           <form>
            <label for = 'login'> Login:</label>
            <input type = ' text'/> <br/>
            <label for = 'senha'>Senha:</label>
          <input type = 'password'/>
           </form>
           <FaGooglePlusG/>

        </div>
    )
}