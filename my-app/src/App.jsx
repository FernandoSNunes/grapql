import React, { useState } from "react";
import "./App.css"
import TopBar from './components/TopBar'
import AllQuestions from './AllQuestions';
import NavBar from './components/NavBar';


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
      < TopBar />

      <NavBar show={show} handleShow={handleShow} handleClose={handleClose}
        formFieldsData={formFieldsData} handleFormFieldsData={handleFormFieldsData}
      />

      <AllQuestions handleShow={handleShow} handleFormFieldsData={handleFormFieldsData} />
    </div >
  )
}

export default App