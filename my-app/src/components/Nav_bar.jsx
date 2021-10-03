import React from "react";
import Form_modal from "./Form_modal";

const Nav_bar = ({ show, handleClose, handleShow, formFieldsData, handleformFieldsData, setFilter }) => {

  //arruma os campos para insercao de um elemento no banco de dados
  const prepararNovo = () => {
    handleformFieldsData(
      "Adicionar questão",
      "",
      "",
      ["", "", "", "", ""],
      0
    )
  }

  const [filterData, updateFilterData] = React.useState("");



  const handleChange = (e) => {
    updateFilterData({
      ...filterData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = () => {
    let questoes = document.getElementsByClassName("Questoes")
    let textos = document.getElementsByClassName("TextoPergunta")
    for (let i = 0; i < questoes.lenght; i++) {
      console.log(textos[i].value)
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
      <Form_modal show={show} handleClose={handleClose} formFieldsData={formFieldsData} />
    </>
  )

}

export default Nav_bar;