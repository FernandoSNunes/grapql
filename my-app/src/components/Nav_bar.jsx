import React, { useState } from "react";
import Form_modal from "./Form_modal";

const Nav_bar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg row">

        <button className="btn btn-primary" onClick={handleShow} >Adicionar Pergunta</button>

        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">

          <form className="form-inline my-2 my-lg-0 ">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Form_modal show={show} setShow={setShow} />
    </>
  )

}

export default Nav_bar;