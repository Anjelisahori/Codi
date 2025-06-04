import { notifyFavorite } from '../utils/notifyFavorite'
import '../css/modules/components.css'

export default function ItemCard({ item, favorites, setFavorites }) {
  const isFav = favorites.includes(item.id)

  const toggleFavorite = () => {
    let updated
    if (isFav) {
      updated = favorites.filter(id => id !== item.id)
      notifyFavorite(false)
    } else {
      updated = [...favorites, item.id]
      notifyFavorite(true)
    }
    setFavorites(updated)
    localStorage.setItem('fav-items', JSON.stringify(updated))
  }

  return (
    <div className="card">
      <img src={item.picture_medium} alt={item.title} className="card-img" />
      <h3>{item.title}</h3>
      <button className="btn" onClick={toggleFavorite}>
        {isFav ? '★ En favoritos' : '☆ Agregar a favoritos'}
      </button>
    </div>
  )
}