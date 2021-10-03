import React from 'react';
import "../App.css"

const TopBar = () => {
  return (

    <div className=" row">
      <div className="navbar  col-sm-12 bg-primary py-2">
        <div className=" navbar-brand d-inline-block align-top">
          <img className="Imagem" src="./assets/Logo.jpg" alt="" /></div>
        <div>
          <h1 className="text-white">
            Banco de questões
          </h1>
          <h4 className="text-white font-italic">
            Gerenciador de questões de multipla escolha
          </h4>
        </div>
      </div>
    </div>

    /* <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      Bootstrap
    </a>
    </nav> */


  )
}



export default TopBar