import React, { useEffect } from 'react';
import "../App.css"

const Top_bar = () => {
  return (

    <div className="row">
      <div className="col-sm-12 bg-primary py-2 Flex">
        <div><img src="./assets/Logo.jpg" alt="" /></div>
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

  )
}



export default Top_bar