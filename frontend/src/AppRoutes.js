import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import FoodPage from './pages/Food/FoodPage'
import CartPage from './pages/Cart/CartPage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import AuthRoute from './components/AuthRoute/AuthRoute'
import PaymentPage from './pages/Payment/PaymentPage'
import OrderTrack from './pages/OrderTrack/OrderTrack'
import ProfilePage from './pages/Profile/ProfilePage'
import OrdersPage from './pages/Orders/OrdersPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import AdminRoute from './components/AdminRoute/AdminRoute'
import FoodsAdminPage from './pages/FoodsAdmin/FoodsAdminPage'


function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/search/:searchTerm' element = {<HomePage/>}/>
        <Route path='/tag/:tag' element = {<HomePage/>}/>
        <Route path='/food/:id' element = {<FoodPage/>}/>
        <Route path='/cart' element = {<CartPage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>  
        <Route path='/checkout' element = {<AuthRoute><CheckoutPage/></AuthRoute>}/>
        <Route path='/payment' element = {<AuthRoute><PaymentPage/></AuthRoute>}/>
        <Route path='/track/:orderId' element = {<AuthRoute><OrderTrack/></AuthRoute>}/>
        <Route path='/profile' element = {<AuthRoute><ProfilePage/></AuthRoute>}/>
        <Route path='/orders/:filter?' element = {<AuthRoute><OrdersPage/></AuthRoute>}/>
        <Route path='/dashboard' element = {<AuthRoute><DashboardPage/></AuthRoute>}/>
        <Route path='/admin/foods/:searchTerm?' element = {<AdminRoute><FoodsAdminPage/></AdminRoute>}/>
    </Routes>
  )
}

export default AppRoutes
