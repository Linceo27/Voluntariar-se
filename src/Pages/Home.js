import Header from '../../src/components/Header/Header'
import SubHeader from '../components/SubHeader/SubHeader'
import Catalogo from '../components/Catalogo/Catalogo'
import Informacoes from '../components/Informações/Informacoes'

export default Home 

function Home(){
    return(
        <div className='container-home'>
            <Header/>
            <SubHeader/>
            <Catalogo/>
            <Informacoes/>
        </div>
    )
}