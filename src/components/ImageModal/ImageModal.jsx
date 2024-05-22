import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => (
  <Modal isOpen={!!image} onRequestClose={onClose}>
    <div>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description || "No description"}</p>
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </div>
  </Modal>
);

export default ImageModal;
