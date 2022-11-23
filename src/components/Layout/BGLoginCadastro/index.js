import "./style.css";

export default function BGLoginCadastro(props) {
  return (
    <div className="container">
      <div className="container-cadastro">
        <div className="wrap-cadastro">
           {props.children}
        </div>
      </div>
    </div>
  );
}
//props.children vai servir o