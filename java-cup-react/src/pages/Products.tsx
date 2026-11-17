import { useState } from 'react'

const products = [
  { id:1, category:'coffee', name:'Espresso', desc:'Double shot', price:'20 kr', img:'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a' },
  { id:2, category:'coffee', name:'Iced Latte', desc:'Oat milk', price:'30 kr', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735' },
  { id:3, category:'coffee', name:'Cappuccino', desc:'Foam art', price:'30 kr', img:'https://images.unsplash.com/photo-1572442388796-11668a67e53d' },
  { id:4, category:'sweets', name:'Tiramisu', desc:'Mascarpone', price:'60 kr', img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
  { id:5, category:'sweets', name:'Gelato', desc:'Homemade', price:'55 kr', img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb' },
  { id:6, category:'sweets', name:'Cookies Box', desc:'6 pcs', price:'120 kr', img:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e' },
]

export default function Products(){
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter)

  return (
    <section className="section dark" style={{paddingTop: '140px'}}>
      <h2 className="section-title">Our Products</h2>
      <div className="filter-btns">
        <button className={filter==='all' ? 'filter active' : 'filter'} onClick={()=>setFilter('all')}>All</button>
        <button className={filter==='coffee' ? 'filter active' : 'filter'} onClick={()=>setFilter('coffee')}>Coffee</button>
        <button className={filter==='sweets' ? 'filter active' : 'filter'} onClick={()=>setFilter('sweets')}>Sweets</button>
      </div>
      <div className="menu-grid">
        {filtered.map(p => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span>{p.price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}