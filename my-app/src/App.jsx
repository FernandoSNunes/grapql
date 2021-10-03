import React, { useEffect, useState } from "react";
import "./App.css"
import Top_bar from './components/Top_bar'
import AllQuestions from './AllQuestions';
import Nav_bar from './components/Nav_bar';


const App = () => {

  //Exibe o form
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  //usada para preencher campos do form caso seja o editar
  const [formFieldsData, setFormFieldsData] = useState(
    {
      title: "",
      id: "",
      pergunta: "",
      alternativas: ["", "", "", "", ""],
      alternativa_correta: 0
    }
  )
  const handleFormFieldsData = (title, id, pergunta, alternativas, alternativa_correta) => setFormFieldsData(
    {
      title: title,
      id: id,
      pergunta: pergunta,
      alternativas: alternativas,
      alternativa_correta: alternativa_correta
    }
  )

  return (
    < div className="container-fluid" >
      < Top_bar />

      <Nav_bar show={show} handleShow={handleShow} handleClose={handleClose}
        formFieldsData={formFieldsData} handleFormFieldsData={handleFormFieldsData}
      />

      <AllQuestions handleShow={handleShow} handleFormFieldsData={handleFormFieldsData} />
    </div >
  )
}

export default App