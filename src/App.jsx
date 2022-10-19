import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import Filter from './components/Filter/Filter'
// import ProductDetails from './components/ProductDetails/ProductDetails'
// import Hero from './components/Hero/Hero'
// import Footer from './components/Footer/Footer'

export default function App() {

  const [products, setProducts] = useState([])
  const [cartVisible, setCartVisible] = useState(false);
  // const [prodDetails, setProdDetails] = useState([])
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


  const handleAddToCart = (repeatProd) => {
    const prodExist = cartProducts.find((item) => item.id === repeatProd.id)
    if (prodExist) {
      setCartProducts(cartProducts.map((item) => item.id === repeatProd.id ? { ...prodExist, qty: prodExist.qty + 1 } : item))
    } else {
      setCartProducts([...cartProducts, { ...repeatProd, qty: 1 }])
    }
  }

  const handleRemoveToCart = (repeatProd) => {
    const prodExist = cartProducts.find((item) => item.id === repeatProd.id)
    if (prodExist.qty === 1) {
      setCartProducts(cartProducts.filter((item) => item.id !== repeatProd.id))
    } else {
      setCartProducts(cartProducts.map((item) => item.id === repeatProd.id ? { ...prodExist, qty: prodExist.qty - 1 } : item))
    }
  }

  const removeAllProducts = () => {
    setCartProducts([])
  }

  // const getProductDetails = () => {
  //   setProdDetails(products)
  // }

  return (
    <div className='scroll-smooth font-mukta'>
      <Navbar handleCartClick={handleCartClick} count={cartProducts.length} />
      {/* <ProductDetails
       getProductDetails={getProductDetails} /> */}
      {/* <Hero /> */}
      {!cartVisible &&
        <Filter
          products={products}
          setProducts={setProducts}
        />}
      <div className="container w-full flex flex-row justify-center items-center flex-wrap">
        {!cartVisible && products.map((product, ind) => {
          return (
            <Card
              key={ind}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
              id={product.id}
              addToCart={handleAddToCart}
            />
          )
        })}
      </div>
      {cartVisible &&
        <Cart
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          handleRemoveToCart={handleRemoveToCart}
          handleAddToCart={handleAddToCart}
          removeAllProducts={removeAllProducts}
        />}
      {/* <Footer /> */}

    </div>
  )
}
