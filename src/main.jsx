import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import ShopContextProvider from './Context/Context.jsx' 
import AdminContextProvider from "./Context/AdminContext";
import { AuthProvider } from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AdminContextProvider>
  <ShopContextProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
  </ShopContextProvider>
  </AdminContextProvider>
)