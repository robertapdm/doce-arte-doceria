import React from 'react';
import Header from "./Componentes/Header/Header.jsx"
import Main from "./Componentes/Main/Main.jsx"
import Produtos from "./Componentes/Main/Produtos.jsx"
import Footer from "./Componentes/Footer/Footer.jsx"
import "./App.css"
import "./assets/style/Reset.css";
import "./assets/style/Produtos.css"

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Produtos/>
    <Footer/>
    </>
  )
}

export default App
