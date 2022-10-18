import './TrabalheConosco.css'
import FormT from '../FormT/FormT'


export default TrabalheConosco

function TrabalheConosco(){
return(
    <div className = 'container-trabalhe-conosco'>
        
            <label for = "fixo-trabalhe-conosco">
                <h2> Trabalhe Conosco:</h2>
            </label>
            <input type = "checkbox" id = "fixo-trabalhe-conosco"/>


            <div id = "texto-variavel">
              <p> O Voluntariar-se é uma iniciativa sem fins lucrativos onde buscamos divulgar ONG's e incentivar o trabalho voluntário na Região Metropolitana do Recife, caso tenha interesse em colaborar com o projeto basta preencher os campos abaixo com as suas informações. </p>
             <FormT/>
            </div>
    </div>
)
}