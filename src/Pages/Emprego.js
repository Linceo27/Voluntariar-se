import SetaVoltar from '../components/SetaVoltar/SetaVoltar'
import Catalogo from '../components/Catalogo/Catalogo'
import './Emprego.css'
export default Emprego 

function Emprego(){
    return(
        <div className='container-emprego'>
            <SetaVoltar/>
            <h1>emprego</h1>
            <Catalogo/>
        </div>
    )
}