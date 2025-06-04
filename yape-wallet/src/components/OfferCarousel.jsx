import React from "react";
import Slider from "react-slick";  // Importamos react-slick
import "./OfferCarousel.css";  // Asegúrate de tener los estilos necesarios

const settings = {
  dots: true,  // Muestra los puntos de navegación en la parte inferior
  arrows: true,  // Habilita las flechas para la navegación
  infinite: true,  // Carrusel infinito (las imágenes vuelven a comenzar después de la última)
  speed: 500,  // Velocidad de la transición entre imágenes
  slidesToShow: 1,  // Muestra solo una imagen a la vez
  slidesToScroll: 1,  // Desplaza una imagen a la vez
  nextArrow: <button className="custom-next">Next</button>,  // Flecha personalizada para avanzar
  prevArrow: <button className="custom-prev">Previous</button>,  // Flecha personalizada para retroceder
};

export default function OfferCarousel() {
  return (
    <div className="offer-carousel">
      <Slider {...settings}>
        <div>
          <img src="/img/offert1.jpg" alt="Oferta 1" />
        </div>
        <div>
          <img src="/img/offert2.jpg" alt="Oferta 2" />
        </div>
        <div>
          <img src="/img/offert3.jpg" alt="Oferta 3" />
        </div>
      </Slider>
    </div>
  );
}
