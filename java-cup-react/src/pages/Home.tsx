import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="badge">Specialty Coffee Since 2024</span>
        <h1>Brewed with<br/><span>Code & Coffee</span></h1>
        <p>More than a coffee shop. A place to work, chill, and taste artisan sweets & ice cream.</p>
        <Link to="/products" className="btn-primary">Explore Menu</Link>
      </div>
      <div className="hero-img">
        <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&auto=format&fit=crop" alt="Coffee cups" />
      </div>
    </section>
  )
}