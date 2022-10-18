import './Educacao.css'
import SetaVoltar from '../components/SetaVoltar/SetaVoltar'
import Catalogo from '../components/Catalogo/Catalogo'
export default Edu 
function Edu(){
    return(  
            <div className='container-educacao' >
                <SetaVoltar/>
                <h1>EDUCAÇÃO</h1>
                <Catalogo/>
        </div>
    )
}