import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Public Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';

// Authentication
import Login from './Pages/Authentication/Login';
import Registration from './Pages/Authentication/Registration';

// Admin Dashboard
import AdminDashboard from './Pages/adminPages/AdminDashboard.jsx';

// 404 Not Found
import NotFound from './Pages/not-found';

// Store Page
import UnauthPage from './Pages/unauth-page/UnauthPage';
import Store from './Pages/Store';

// Redux Store
import { selectUser, selectUserIsAdmin } from './redux/features/auth/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { login, setLoading, setError } from "./redux/features/auth/authSlice.jsx";
import client from './lib/axios';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const admin = useSelector(selectUserIsAdmin);
  // Fetch token and authenticate user on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken"); // Using localStorage for token storage
      if (token) {
        try {
          dispatch(setLoading(true)); // Dispatch global loading state
          const response = await client.get("/auth/verify-user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.success && response.data.user) {
            // Dispatch user data to Redux store
            dispatch(login(response.data.user));
          } else {
            dispatch(setError("Authentication failed"));
          }
        } catch (error) {
          dispatch(setError("Token verification failed"));
          console.error("Error during token verification:", error);
        } finally {
          dispatch(setLoading(false)); // Dispatch to stop loading in the global state

        }
      } else {

      }
    };

    checkAuth();
  }, [dispatch]);

  if (admin) {
    Navigate
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar username={user.username} isAdmin={admin} />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={admin ? <Navigate to="/admindashboard" /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/learn"
            element={user.username ? <Learn /> : <Navigate to="/login" />}
          />
          <Route
            path="/store"
            element={user.username ? <Store /> : <Navigate to="/login" />}
          />
          <Route
            path="/admindashboard"
            element={admin ? <AdminDashboard /> : <Navigate to="/login" />}
          />
          {/* Authentication */}
          {/* <Route path="/auth/*" element={
            <CheckAuth user={user.username}>
              <AuthLayout />
            </CheckAuth>
          } /> */}



          {/* Admin Routes */}
          {/* <Route path="/admin/*" element={
            <CheckAuth user={user.username}>
              <AdminLayout />
            </CheckAuth>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route> */}


          {/* Shopping Routes */}
          {/* <Route path="/shop/*" element={
            <CheckAuth user={user.username}>
              <ShoppingLayout />
            </CheckAuth>
          }>
            <Route index element={<ShoppingHome />} />
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
          </Route> */}


          {/* Store Route */}
          {/* <Route path="/store" element={<Store />} /> */}

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
          <Route path="/unauth-page" element={<UnauthPage />} />
        </Routes>
      </main>
      <Footer isAdmin={admin} />
    </div>
  );
};

export default App;
