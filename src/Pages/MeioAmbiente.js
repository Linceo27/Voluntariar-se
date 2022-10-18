import Catalogo from '../components/Catalogo/Catalogo'
import SetaVoltar from '../components/SetaVoltar/SetaVoltar'
import './MeioAmbiente.css'
export default MeioAmbiente 

function MeioAmbiente(){
    return(
        <div className='container-emprego'>
            <SetaVoltar/>
            <h1>MEIO AMBIENTE</h1>
            <Catalogo/>
        </div>
    )
}