import React, { useState } from "react";
import Cupcakes from "../../assets/Images/cupcakes-2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleXmark, faTrash, faXmark} from '@fortawesome/free-solid-svg-icons'
import Boloespecial from "../../assets/Images/bolos-especiais.jpg"
import Cafe from "../../assets/Images/cafe.jpg"
import Bolocaseiro from "../../assets/Images/caseiro.jpg"
import Torta from "../../assets/Images/cheesecake.jpg"
import Macaroons from "../../assets/Images/macaroons.jpg"

function Produtos(){
const [card1, setCard1] = useState(1);
const [valor1,setValor1] = useState(100)

function Adicionar(){
    if(card1<9){
     setCard1 (card1+1);
    setValor1 (valor1+100);   
    }else{
        setCard1(card1)
        setValor1(valor1)
    }
};

function Remover(){
    if(card1>1){
        setCard1(card1-1)
        setValor1 (valor1-100)   
    } else{
        setCard1 (card1)
        setValor1 (valor1)
    }
};

function Limpar(){
    setCard1(1)
    setValor1(100)
}

    return(
    <section className='produtos'>
        <h2 className="textoProduto">Conheça nossos produtos e faça seu pedido.</h2>
        <p>Escolha seu doce, acrescente no carrinho e finalize a compra.</p>
    <div className="galeriaProdutos">
    <div className='card'>
        <div className='produto'>
            <img src={Boloespecial} alt="Bolo confeitado" />
        </div>
        <h3>Bolos</h3>
        <div className='shop'>
            <h3 className="itens">{card1} un</h3>
            <h3 className="preco">R${valor1},00</h3>
        </div>
        <div className="cartShop">    
        <button className="botao" onClick={Remover}><FontAwesomeIcon icon={faTrash}/>
        </button>
        <button className="botao" onClick={Adicionar}><FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="botao" onClick={Limpar}><FontAwesomeIcon icon={faXmark} />
        </button>
        </div>
    </div>
    <div className='card'>
        <div className='produto'>
            <img src={Cafe} alt="Xícara de café com leite formando um desenho no cafe" />
        </div>
        <h3>Cafés Gourmet</h3>
        <div className='shop'>
            <h3 className="itens">{card1}uni</h3>
            <h3 className="preco">R${valor1},00</h3>
        </div>
        <div className="cartShop">    
        <button className="botao" onClick={Remover}><FontAwesomeIcon icon={faTrash}/>
        </button>
        <button className="botao" onClick={Adicionar}><FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="botao" onClick={Limpar}><FontAwesomeIcon icon={faXmark} />
        </button>
        </div>
    </div>
    <div className='card'>
        <div className='produto'>
            <img src={Bolocaseiro} alt="Bolos Caseiros" />
        </div>
        <h3>Bolos Caseiros</h3>
        <div className='shop'>
            <h3 className="itens">{card1}uni</h3>
            <h3 className="preco">R${valor1},00</h3>
        </div>
        <div className="cartShop">    
        <button className="botao" onClick={Remover}><FontAwesomeIcon icon={faTrash}/>
        </button>
        <button className="botao" onClick={Adicionar}><FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="botao" onClick={Limpar}><FontAwesomeIcon icon={faXmark} />
        </button>
        </div>
    </div>
    <div className='card'>
        <div className='produto'>
            <img src={Torta} alt="Torta Cheese Cake" />
        </div>
        <h3>Tortas</h3>
        <div className='shop'>
            <h3 className="itens">{card1}uni</h3>
            <h3 className="preco">R${valor1},00</h3>
        </div>
        <div className="cartShop">    
        <button className="botao" onClick={Remover}><FontAwesomeIcon icon={faTrash}/>
        </button>
        <button className="botao" onClick={Adicionar}><FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="botao" onClick={Limpar}><FontAwesomeIcon icon={faXmark} />
        </button>
        </div>
    </div>
    <div className='card'>
        <div className='produto'>
            <img src={Cupcakes} alt="Foto de Cupcakes confeitados" />
        </div>
        <h3>Cupcakes</h3>
        <div className='shop'>
            <h3 className="itens">{card1}uni</h3>
            <h3 className="preco">R${valor1},00</h3>
        </div>
        <div className="cartShop">    
        <button className="botao" onClick={Remover}><FontAwesomeIcon icon={faTrash}/>
        </button>
        <button className="botao" onClick={Adicionar}><FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="botao" onClick={Limpar}><FontAwesomeIcon icon={faXmark} />
        </button>
        </div>
    </div>
    <div className='card'>
        <div className='produto'>
            <img src={Macaroons} alt="Macaroons Coloridos" />
        </div>
        <h3>Macaroons</h3>
        <div className='shop'>
            <h3 className="itens">{card1}uni</h3>
            <h3 className="preco">R${valor1},00</h3>
        </div>
        <div className="cartShop">    
        <button className="botao" onClick={Remover}><FontAwesomeIcon icon={faTrash}/>
        </button>
        <button className="botao" onClick={Adicionar}><FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="botao" onClick={Limpar}><FontAwesomeIcon icon={faXmark} />
        </button>
        </div>    
        </div>
    </div>
    </section>)
}

export default Produtos;