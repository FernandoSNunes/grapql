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

  const [filter, setFilter] = useState("")

  //usada para preencher campos do form caso seja o editar
  const [formFieldsData, setformFieldsData] = useState(
    {
      title: "",
      id: "",
      pergunta: "",
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
      {/* {filter} */}
      < Top_bar />

      <Nav_bar show={show} handleShow={handleShow} handleClose={handleClose}
        formFieldsData={formFieldsData} handleformFieldsData={handleformFieldsData}
        filter={setFilter} setFilter={setFilter} />

      <AllQuestions handleShow={handleShow} handleformFieldsData={handleformFieldsData} filter={filter} />
    </div >
  )
}

export default App