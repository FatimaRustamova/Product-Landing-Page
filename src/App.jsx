import { useState } from 'react'
import './assets/css/style.css'
import data from './data.json'

function App() {
  const [product, setProduct] = useState(data)

  const sortByFunction = (e) => {
    const value = e.target.value;

    if (value === "asc") {
      const sorted = [...product].sort((a, b) => Number(a.price) - Number(b.price));
      setProduct(sorted);
    } else if (value === "desc") {
      const sorted = [...product].sort((a, b) => Number(b.price) - Number(a.price));
      setProduct(sorted);
    } else if (value === "def") {
      setProduct(data);
    }
  };

  return (
    <>
      <section className='title'>
        <h1>Product Landing Page</h1>
      </section>
      <section className='sorted'>
        <select name="sort" className='sort' onChange={sortByFunction}>
          <option value="def">Default</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </section>
      <section className='product-placement'>
          {product.map(element => {
             return(
              <div className='product' key={element.id}>
                <img src={element.image} alt={element.name} />
                <article>
                  <h3>{element.name}</h3>
                  <p>${element.price}</p>
                </article>
                <button>Add to Cart</button>
              </div>
             )
          })}
      </section>
    </>
  )
}

export default App
