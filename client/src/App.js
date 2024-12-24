import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInForm from './pages/auth/LogInForm';
import RegisterForm from './pages/auth/RegisterForm';
import Admin from './pages/admin/Admin';
import AddProduct from './pages/admin/AddProduct';
import Products from './pages/screens/Products';
import Cart from './pages/screens/Cart';
import ForgetPasswordForm from './pages/auth/ForgetPasswordForm';
import CheckOut from './pages/screens/CheckOut';
import Cancel from './pages/screens/Cancel';
import Success from './pages/screens/Success';
import About from './pages/screens/About';
import Orders from './pages/screens/Orders';
import { CircularProgress } from '@mui/material';


const HomePage = React.lazy(() => import('./pages/screens/HomePage'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogInForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/products' element={<Products />} />
          <Route path='/home' element={
              <Suspense fallback={<CircularProgress/>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path='/admin' element={<Admin />} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/forget-password' element={<ForgetPasswordForm />} />
          <Route path='/about' element={<About />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/cancel' element={<Cancel />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
