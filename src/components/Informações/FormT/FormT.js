export default FormT 
function FormT (){
    return(
        <idv>
             <form type = 'submit'>
                <label for = 'nome'>Nome Completo:</label> 
                <input type = 'text' placeholder = 'Insira seu Nome' required/><br/>
                <label for = 'apresentacao'>Apresentação:</label> 
                <input type = 'text' placeholder = 'Nos fale um pouco sobre você'/><br/>
                <label for = 'voluntario.question'> Você já foi voluntário?</label>
                <input type = 'text' placeholder = 'Fale sobre suas experiências' /><br/>
                <label for = 'curriculo'>Currículo:</label>
                <input type = 'file'/> <br/>
                <label for = 'contato'>Celular/Whatsapp:</label>
                <input type = 'fone' placeholder = '(DDD) 9.9999-9999'/> <br/>
                <label for='email'>E-mail:</label>
                <input type = 'email' placeholder = '@gmail.com'/>
              </form>
        </idv>
    )
}