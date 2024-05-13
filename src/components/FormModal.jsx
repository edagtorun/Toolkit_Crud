import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/crudSlice";

const FormModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  //formun gonderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputtaki bilgileri nesneye cevir
    const formData = new FormData(e.target);

    const taskData = Object.fromEntries(formData.entries());

    //reducer'a yeni task'in eklenecegini haber ver
    dispatch(addTask(taskData));
  };

  return (
    <Modal centered show={isOpen} onHide={handleClose} className="text-black">
      <Modal.Header closeButton>
        <Modal.Title>Yeni Gorev Ekle</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Gorev Basligi</Form.Label>
            <Form.Control name="title" placeholder="Navbari Duzenle" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Isminiz</Form.Label>
            <Form.Control name="author" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanicak Kisinin Ismi</Form.Label>
            <Form.Control name="assigned_to" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control type="date" name="end_date" required />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Iptal
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Olustur
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
