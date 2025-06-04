import React, { useState } from 'react';
import './items.css'; // Asegúrate de importar el archivo CSS donde agregaste el estilo

const items = [
  {
    id: 1,
    title: "Enviar Dinero",
    description: "Envía dinero al instante a tus contactos",
    image: "/img/imagen1.jpg", // Ruta de la imagen desde public/img
  },
  {
    id: 2,
    title: "Pagar Recibos",
    description: "Paga luz, agua, internet fácilmente",
    image: "/img/imagen2.jpg",
  },
  {
    id: 3,
    title: "Recargar Celular",
    description: "Recarga tu celular rápidamente",
    image: "/img/imagen3.jpg",
  },
];

function CardList() {
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState(""); // Estado para el mensaje de añadido a favoritos

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
      setMessage(""); // Si se quita de favoritos, eliminamos el mensaje
    } else {
      setFavorites([...favorites, id]);
      setMessage("¡Añadido a favoritos!"); // Mostramos el mensaje
    }

    // Ocultamos el mensaje después de 2 segundos
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <section className="items-list"> {/* Cambié el nombre de la clase a .items-list */}
      <h2>Funcionalidades</h2>
      <div className="card-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <button
              className={`favorite-button ${favorites.includes(item.id) ? 'active' : ''}`}
              onClick={() => toggleFavorite(item.id)}
            >
              {favorites.includes(item.id) ? '★' : '☆'}
            </button>
            <img src={item.image} alt={item.title} className="item-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {message && <div className="favorite-message">{message}</div>} {/* Mostrar el mensaje */}
    </section>
  );
}

export default CardList;
