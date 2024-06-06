import '/app/styles/modal.scss';


const Modal = ({onModalClose, images, selectedImage}) => {

  return (
    <div className="container-fluid modal-container">
      <button className='close-btn' onClick={onModalClose}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={25} height={25}>
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      </button>
      <div className='modal-content'>
        <div id="galleryCarousel" class="carousel slide">
          <div class="carousel-inner">
            {images.map((image, index) => {
              let isActive = index === selectedImage ? "active" : ""
              return (
                <div key={index} className={`carousel-item ${isActive}`}>
                  <img src={image} className="d-block w-100" alt="..."/>
                </div>
              )
            })}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;