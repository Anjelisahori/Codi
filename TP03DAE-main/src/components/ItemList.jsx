import ItemCard from './ItemCard'
import '../css/modules/components.css'

export default function ItemList({ items, favorites, setFavorites }) {
  return (
    <div className="grid-container">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  )
}
