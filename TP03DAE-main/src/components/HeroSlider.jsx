import '../css/modules/components.css'

const slides = [
  'https://e-cdns-images.dzcdn.net/images/cover/0c59740e1e29efcb379e1fc4c3a6cb9a/500x500.jpg',
  'https://e-cdns-images.dzcdn.net/images/cover/da0c8e95719a3c3176e27c276dd8d121/500x500.jpg',
  'https://e-cdns-images.dzcdn.net/images/cover/f0e8d2e6745e9a1df89a0fa5c1e84b30/500x500.jpg'
]

export default function HeroSlider() {
  return (
    <section className="hero-slider">
      {slides.map((img, i) => (
        <img src={img} key={i} alt={`slide-${i}`} className="slide" />
      ))}
    </section>
  )
}
