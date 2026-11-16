import { useState } from 'react'
import './App.css'
import ProductCart from './ProductCart';
import Products from './Products';

function App() {
  const [products, setProducts] = useState([]);

  return (
   <div>
    <h1>Shopping Cart App</h1>
    
    <div className = "productSearch">
     <h2>Products</h2>
     <input type="text" placeholder="Search products..." value={products} onChange={(event) => setProducts(event.target.value)}/>
    </div>

<br></br><br></br> 
<dl>
    <div className="productList">
    {Products.map(Products =>
    <ProductCart  key = {Products.id} name = {Products.name} price = {Products.price}  category = {Products.category}></ProductCart>
    )}
    </div>
</dl>
   </div>
  )
}

export default App
