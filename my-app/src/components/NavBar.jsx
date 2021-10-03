import React from "react";
import FormModal from "./FormModal";

const NavBar = ({ show, handleClose, handleShow, formFieldsData, handleFormFieldsData }) => {

  //arruma os campos para insercao de um elemento no banco de dados
  const prepararNovo = () => {
    handleFormFieldsData(
      "Adicionar questão",
      "",
      "",
      ["", "", "", "", ""],
      0
    )
  }

  const [filter, setFilter] = React.useState("");



  const handleChange = (e) => {
    setFilter(

      e.target.value.trim()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let questoes = document.getElementsByClassName("Questao")
    let textos = document.getElementsByClassName("TextoPergunta")
    console.log(questoes.length)
    for (let i = 0; i < questoes.length; i++) {
      console.log(textos[i])
      if (textos[i].innerHTML.includes(filter)) {
        questoes[i].style.display = ""
      }
      else
        questoes[i].style.display = "none"
    }
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg row">

        <button className="btn btn-primary" onClick={() => { prepararNovo(); handleShow() }} >Adicionar Pergunta</button>

        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">

          <form className="form-inline my-2 my-lg-0 ">
            <input className="form-control mr-sm-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSubmit} type="submit">Buscar</button>
          </form>
        </div>
      </nav>
      <FormModal show={show} handleClose={handleClose} formFieldsData={formFieldsData} />
    </>
  )

}

export default NavBar;