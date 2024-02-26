import React, {useState} from 'react';
import Confeiteira from "../../assets/Images/confeiteira.jpg"

function Main (){
    const [numero, setNumero] = useState(0)
    const [parar, setParar] = useState()
    
    const Iniciar = ()=>{
        const GuardarValor = setInterval(()=>{
            setNumero ((valor) => valor+1)
        },1000)

        setParar(GuardarValor)
    }

    const PararContagem = () =>{
        clearInterval(parar)
    }

    const ZerarContagem = () =>{
        setNumero(0)
    }

    return(
        <main>
            <section className='principal'>
            <div className='texto'>
            <h1>A <span className='destaque'>Doce Arte</span> de fazer <span className='destaque'>os melhores</span> doces da região.</h1>
            <h3><span className='destaque'>Número 1</span> em atendimento e agilidade na entrega.</h3>
            <button className='botao' type='submit'>Faça seu pedido aqui</button>
            </div>
            <img className='confeiteira' src={Confeiteira} alt="" />
            </section>
            <section className='container'>
                <p>
                    Dispare o cronômetro e veja quanto tempo você leva para finalizar e receber o seu pedido.
                </p>
                <div className='cronometro'>
                    <div className="visor">
                        {numero}
                    </div>
                    <div className='botoes'>
                    <button className='inicio' onClick={Iniciar}>Iniciar</button>
                    <button className='parar' onClick={PararContagem}>Parar</button>
                    <button className='zerar' onClick={ZerarContagem}>Zerar</button>
                    </div>
                </div>
                <p>
                    Pedimos para que não saia da página enquanto espera. Encerre o cronômetro ao receber seu pedido.
                    Obs: tempo em segundos.
                </p>
            </section>
        </main>
    )
}

export default Main;