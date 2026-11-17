export default function Contact(){
  return (
    <section className="section dark" style={{paddingTop: '140px'}}>
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-grid">
        <form id="contactForm">
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <textarea id="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
          <p id="formMsg"></p>
        </form>
        <div className="contact-info">
          <p>📍 Main Street 12, Hässleholm</p>
          <p>⏰ 07:00 - 20:00 Daily</p>
          <iframe 
            src="https://maps.google.com/maps?q=Hassleholm&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </section>
  )
}