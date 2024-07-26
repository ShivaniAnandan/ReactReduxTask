import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart1 from './components/Cart';
import { Provider } from 'react-redux';
import { ProductStore } from './redux/ProductStore';



function App() {
  //creating products data
  const products = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjalCcniPc9IEe_NOTZIOkN2lbK7DS0u-IPA&s"
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39bK8KsnSJ42uDvlJWdVssgmG_tfsyIIeIQ&s"
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHQYwJ8dZhyBvqZ-xOJVS0cAIDu0HTdp81A&s"
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "image":"https://productimages.withfloats.com/actual/619a8e3e530b4f00014200fe.jpeg"
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "image":"https://m.media-amazon.com/images/I/51M0gplIVFL.jpg"
    }
]

  

  return (
    <>
      {/* <h1>App Component </h1> */}
      {/* Creating routes for home , products and cart */}
      <BrowserRouter>
      <Provider store={ProductStore}>
        <div>
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/cart" element={<Cart1 />} />
        </Routes>
      </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
