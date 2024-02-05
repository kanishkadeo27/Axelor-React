import Toast from "react-bootstrap/Toast";

function Toasts({ title }) {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">{title}</strong>
        <small>Just Now</small>
      </Toast.Header>
      <Toast.Body>Added Successfully...</Toast.Body>
    </Toast>
  );
}

export default Toasts;
