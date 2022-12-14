import { useState } from "react";
import Modal from "../Modal/Index";


export default function PopUp (){
    const [popUpVisivel, setPopUpVisivel] = useState(false);
    return(
        <div className="container-pop-up">
            <button onClick = {setPopUpVisivel(true)}> Abrir</button>
            {setPopUpVisivel? 

             <Modal onClose={()=> setPopUpVisivel(false)}><h2>TESTE</h2></Modal>
             
             : null }
        </div>
    )
}