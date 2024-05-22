import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => (
  <ul>
    {images.map((image) => (
      <li key={image.id} onClick={() => onImageClick(image)}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
