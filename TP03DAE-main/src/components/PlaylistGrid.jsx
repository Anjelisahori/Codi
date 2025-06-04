import '../css/modules/components.css'

const playlists = [
  {
    id: 1,
    name: 'Top Latino',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/8c334f48a0e2ffca53fd22769ab14eaf/264x264.jpg'
  },
  {
    id: 2,
    name: 'Dance Hits',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/4f9dc1e5ae671682c24575b2e72a8678/264x264.jpg'
  },
  {
    id: 3,
    name: 'Focus Música',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f2ef0e6bb219e58fc5f7d5d159e72950/264x264.jpg'
  }
]

export default function PlaylistGrid() {
  return (
    <section className="grid-container">
      {playlists.map(item => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} className="card-img" />
          <h3>{item.name}</h3>
          <button className="btn">Escuchar ahora</button>
        </div>
      ))}
    </section>
  )
}