import './Header.css'
import logo from '../../images/logo.png'
export default Header

function Header(){
    return(
        <div>
            <div className = "container-header">
                <img id ='logo' src = {logo} alt = 'Logo Voluntariar-se'/>
                <div>
                    <h1 id ='titulo-header'> VOLUNTARIAR-SE</h1> 
                </div>
            </div>
            
        </div>
    )
}