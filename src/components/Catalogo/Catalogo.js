import './Catalogo.css'
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.png'
import p3 from '../../images/p3.png'

export default Catalogo

function Catalogo(){
    return(
        <div className = 'container-catalogo'>
                <div className='bloco1'>
                    <h3>Projeto 1</h3>
                    <img src = {p1} alt = "descrição imagem"/>
                    <p> Descrição Projeto</p>
                    <button>Saiba Mais</button>
                    <button>Seja Voluntário</button>
        
                </div>
                <div className='bloco2'>
                    <h3>Projeto 2</h3>
                    <img src = {p2} alt = "descrição imagem"/>
                    <p> Descrição Projeto</p>
                    <button>Saiba Mais</button>
                    <button>Seja Voluntário</button>
                </div>
                <div className='bloco3'>
                    <h3>Projeto 3</h3>
                    <img src = {p3} alt = "descrição imagem"/>
                    <img src = 'image.png' alt = ""/>
                    <p> Descrição Projeto</p>
                    <button>Saiba Mais</button>
                    <button>Seja Voluntário</button>
                </div>
        </div>
    )
}