import './ObjetoUsuario'

export default ObjetoUsuario

function ObjetoUsuario(){

    const userPerson = function (nome,sobrenome,cpf,endereco,dataNascimento,email,celular,senha){
        this.nome = nome , 
        this.sobrenome = sobrenome, 
        this.cpf = cpf, 
        this.endereco = endereco,
        this.dataNascimento = dataNascimento,
        this.email = email,
        this.celular = celular, 
        this.senha= senha

    }
    return(
        <div className = 'container-object-users'>

        </div>
    )
}