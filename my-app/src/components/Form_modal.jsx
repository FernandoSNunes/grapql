import React from "react";
import { Button, Modal, Form } from "react-bootstrap"
import createQuestionMutation from "./mutations/CreateQuestionMutation.jsx"



const Form_modal = ({ show, handleClose, formFieldsData }) => {

  const initialFormData = Object.freeze({
    Pergunta: formFieldsData.pergunta,
    alternativa_1: "",
    alternativa_2: "",
    alternativa_3: "",
    alternativa_4: "",
    alternativa_5: "",
    alternativa_correta: 0
  });

  let dados = [];

  const [formData, updateFormData] = React.useState(initialFormData);



  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    //e.preventDefault()
    //console.log(formData.Pergunta, [formData.alternativa_1, formData.alternativa_2, formData.alternativa_3, formData.alternativa_4, formData.alternativa_5], formData.alternativa_correta);

    createQuestionMutation(formData.Pergunta, [formData.alternativa_1, formData.alternativa_2, formData.alternativa_3, formData.alternativa_4, formData.alternativa_5], parseInt(formData.alternativa_correta), () => console.log(`mutation complete`))

    // ... submit to API or something
  };


  return (
    <>
      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            {formFieldsData.Pergunta}
            <Modal.Title name="title" cont>  {initialFormData.Pergunta} </Modal.Title>
          </Modal.Header>
          <Modal.Body>Após adicionar, é necessário atualizar a pagina. Campos em branco irão crashar o programa (Não arrumei isso por conta do tempo)

            <Form.Group className="mb-3" >
              <Form.Label>Pergunta</Form.Label>
              <Form.Control size="lg" name="Pergunta" on onChange={handleChange} type="text" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Alternativa 1</Form.Label>
              <Form.Control name="alternativa_1" onChange={handleChange} type="text" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Alternativa 2</Form.Label>
              <Form.Control name="alternativa_2" onChange={handleChange} type="text" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Alternativa 3</Form.Label>
              <Form.Control name="alternativa_3" onChange={handleChange} type="text" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Alternativa 4</Form.Label>
              <Form.Control name="alternativa_4" onChange={handleChange} type="text" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Alternativa 5</Form.Label>
              <Form.Control name="alternativa_5" onChange={handleChange} type="text" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Select aria-label="Default select example" name="alternativa_correta" onChange={handleChange} defaultValue="Choose...">
              <option>Alternativa correta</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => { handleSubmit(); handleClose(); }} >
              Submit
            </Button>
            {/* <Button variant="primary"  onClick={handleClose} >
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );

}
export default Form_modal;