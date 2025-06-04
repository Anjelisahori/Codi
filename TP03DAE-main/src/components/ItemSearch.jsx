import '../css/modules/components.css'

export default function ItemSearch({ value, setValue }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar playlist"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="search-input"
      />
    </div>
  )
}
