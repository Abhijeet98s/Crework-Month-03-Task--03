import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
// import Hero from './components/Hero/Hero'
// import Footer from './components/Footer/Footer'

export default function App() {

  const [products, setProducts] = useState([])
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleCartClick = () => {
    console.log("Abhijeet");
    setCartVisible(!cartVisible);
  };

  const handleAddToCart = (id) => {
    console.log(id);
    console.log(id.id);
    const addedItem = products.filter((product) => product.id === id.id);
    setCartProducts([...cartProducts, ...addedItem]);
    // console.log(addedItem)
  }


  return (
    <div className='scroll-smooth font-mukta'>
      <Navbar handleCartClick={handleCartClick} count={cartProducts.length} />
      <div className="container w-full flex flex-row justify-center items-center flex-wrap">
        {!cartVisible && products.map((product, ind) => {
          return (
            <Card
              key={ind}
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
              addToCart={handleAddToCart}
            />
          )
        })}
      </div>
      {cartVisible && <Cart
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />}
      {/* <Hero /> */}
      {/* <Footer /> */}
    </div>
  )
}
