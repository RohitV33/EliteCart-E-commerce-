import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminProducts from "./Pages/Admin/AdminProducts";
import AddProduct from "./Pages/Admin/AddProduct";
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
import AdminRoute from "./Components/AdminRoute";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminOrders from "./Pages/Admin/AdminOrders";
import AdminOrderDetails from "./Pages/Admin/AdminOrderDetails";
import MyOrders from "./Pages/MyOrders";
import MyOrderDetails from "./Pages/MyOrderDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20"> 
        <Routes>
          <Route path="/" element={<Shop />} /> 
          <Route path="/men" element={<ShopCategory category="men's clothing" />} />
          <Route path="/women" element={<ShopCategory category="women's clothing" />} />
          <Route path="/jewelry" element={<ShopCategory category="jewelery" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/products" element={<Products />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/admin/orders/:orderId" element={<AdminOrderDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-orders/:id" element={<MyOrderDetails />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}