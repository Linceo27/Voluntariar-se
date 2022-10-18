import './DicasMelhoria .css'
export default DicasMelhoria 

function DicasMelhoria (){
    return(
        <div className = 'container-trabalhe-conosco'>
        
        <label for = "fixo-dicas">
            <h2>Dicas de Melhoria?</h2>
        </label>
        <input type = "checkbox" id = "fixo-dicas"/>


        <div id = "texto-variavel">
          <p>Nós buscamos trabalhar sempre para deixar o Voluntariar-se o mais dinâmico e prático possível, para você. Nos diga como podemos melhorar !!! </p>
        <form>
            <label for = 'dicas'>Nos conte como podemos melhorar o site:</label> <br/>
            <textarea type = 'block' rows = '7' cols = '50' placeholder='Sua dica aqui!'/>
        </form>
        
        </div>
</div>
    )
}