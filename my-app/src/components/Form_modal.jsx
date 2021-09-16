import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"

const Form_modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <form onSubmit={
        (values) => console.log(values)
      }>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!

            <input type="text" label="teste" name="nome" />


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit"  >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form >
    </>
  );

}
export default Form_modal;