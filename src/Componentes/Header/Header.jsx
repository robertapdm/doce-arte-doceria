import React from 'react';
import Logo from "../../assets/Images/logo-doce-arte.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Header (){
    return(
        <header>
            <img className='logo' src={Logo} alt="Logo da doceria Doce Arte" />
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Nossa História</li> <li>Catálogo</li>
                    <li>Orçamento</li>
                    <li>Contato</li>
                </ul>                    
            </nav>
            <div className='cartShop'>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </header>
    )
}

export default Header;