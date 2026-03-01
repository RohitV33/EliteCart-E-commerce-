import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop'; 
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";
import Products from "./Pages/Products";
import Lookbook from "./Pages/Lookbook";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20"> {/* Padding to prevent content from hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Shop />} /> 
          <Route path="/mens" element={<ShopCategory category="men's clothing" />} />
          <Route path="/womens" element={<ShopCategory category="women's clothing" />} />
          <Route path="/jewelry" element={<ShopCategory category="jewelery" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/products" element={<Products />} />
          <Route path="/lookbook" element={<Lookbook />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}