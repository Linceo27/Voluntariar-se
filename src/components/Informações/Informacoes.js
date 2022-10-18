import DicasMelhoria from './Contato/DicasMelhoria'
import './Informacoes.css'
import SobreNos from './SobreNos/SobreNos'
import TrabalheConosco from './TrabalheConosco/TrabalheConosco'

export default Informacoes 

function Informacoes  (){
    return(
        <div className = 'container-info'>
           <div className='container-info'>
               <SobreNos/>
               <TrabalheConosco/>
               <DicasMelhoria/>
           </div>
        </div>
    )
}