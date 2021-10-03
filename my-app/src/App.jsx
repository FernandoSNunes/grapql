import React, { useState } from "react";
import "./App.css"
import QuestionListPage from './components/QuestionListPage';
import Top_bar from './components/Top_bar'
import AllQuestions from './AllQuestions';
import Nav_bar from './components/Nav_bar';
import Form_modal from './components/Form_modal';


const App = () => {

  //Exibe o form
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //usada para preencher campos do form caso seja o editar
  const [formFieldsData, setformFieldsData] = useState(
    {
      title: "",
      id: "",
      pergunta: "teste",
      alternativas: ["", "", "", "", ""],
      alternativa_correta: 0
    }
  )
  const handleformFieldsData = (title, id, pergunta, alternativas, alternativa_correta) => setformFieldsData(
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

      {formFieldsData.pergunta}
      < Top_bar />
      <Nav_bar show={show} handleShow={handleShow} handleClose={handleClose} formFieldsData={formFieldsData} handleformFieldsData={handleformFieldsData} />
      <AllQuestions handleShow={handleShow} handleformFieldsData={handleformFieldsData} />
      {/* <QuestionListPage /> */}
    </div >
  )
}

export default App