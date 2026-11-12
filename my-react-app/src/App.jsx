import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  return (
   <div>
    <h1>Shopping Cart App</h1>
    
    <div className = "productSearch">
     <h2>Products</h2>
     <input type="text" placeholder="Search products..." value={products} onChange={(event) => setProducts(event.target.value)}/>
    </div>
   </div>
  )
}

export default App
