export default function About(){
  return (
    <section className="section" style={{paddingTop: '140px'}}>
      <div className="about-grid">
        <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0" alt="coffee shop" />
        <div>
          <h2>About The Java Cup</h2>
          <p>Modern coffee shop inspired by developers. We roast beans and bake fresh daily.</p>
          <ul className="about-list">
            <li>✓ 100% Arabica</li>
            <li>✓ Bakery & Gelato</li>
            <li>✓ Free WiFi</li>
          </ul>
        </div>
      </div>
    </section>
  )
}