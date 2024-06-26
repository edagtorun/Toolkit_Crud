import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/slices/crudSlice";

const FormModal = ({ editItem, isOpen, handleClose }) => {
  const dispatch = useDispatch();
  //formun gonderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputtaki bilgileri nesneye cevir
    const formData = new FormData(e.target);

    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      //reducer'a guncellenecek elemani haber ver
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      //reducer'a yeni task'in eklenecegini haber ver
      dispatch(addTask(taskData));
    }
    // modali kapat
    handleClose();
  };

  return (
    <Modal centered show={isOpen} onHide={handleClose} className="text-black">
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Basligi</Form.Label>
            <Form.Control
              name="title"
              placeholder="Navbari Duzenle"
              defaultValue={editItem?.title}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Isminiz</Form.Label>
            <Form.Control
              name="author"
              defaultValue={editItem?.author}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanacak Kisinin Ismi</Form.Label>
            <Form.Control
              name="assigned_to"
              defaultValue={editItem?.assigned_to}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              defaultValue={editItem?.end_date}
              required
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Iptal
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? "Kaydet" : "Olustur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
