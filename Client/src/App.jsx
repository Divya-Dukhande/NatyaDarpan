import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Public Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';
import ContactForm from './Pages/contactUs/contactForm.jsx';

// Authentication
import Login from './Pages/Authentication/Login';
import Registration from './Pages/Authentication/Registration';

// Admin
import AdminDashboard from './Pages/adminPages/AdminDashboard.jsx';

// Error & Payment
import NotFound from './Pages/not-found';
import UnauthPage from './Pages/unauth-page/UnauthPage';
import Store from './Pages/Store';
import Success from './Pages/payment/Success.jsx';
import Cancel from './Pages/payment/cancel.jsx';

// Redux Store
import { selectUser, selectUserIsAdmin } from './redux/features/auth/authSlice';
import { login, setLoading, setError } from "./redux/features/auth/authSlice.jsx";
import client from './lib/axios';
import Notifications from './Pages/notifications/notifications.jsx';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const admin = useSelector(selectUserIsAdmin);
  const isLoading = useSelector((state) => state.auth.loading);

  // Fetch token and authenticate user on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          dispatch(setLoading(true));
          const response = await client.get("/auth/verify-user", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.data.success && response.data.user) {
            dispatch(login(response.data.user));
          } else {
            dispatch(setError("Authentication failed"));
          }
        } catch (error) {
          dispatch(setError("Token verification failed"));
          console.error("Error during token verification:", error);
        } finally {
          dispatch(setLoading(false));
        }
      } else {
        dispatch(setLoading(false)); // stop loading even if no token
      }
    };

    checkAuth();
  }, [dispatch]);

  // Redirect admin to dashboard after login
  useEffect(() => {
    if (!isLoading && user?.username && admin) {
      navigate("/admindashboard", { replace: true });
    }
  }, [isLoading, user, admin, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar username={user.username} isAdmin={admin} />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={user.username ? <Navigate to="/learn" /> : <Login />} />
          <Route path="/register" element={<Registration />} />

          {/* Protected Routes */}
          <Route
            path="/learn"
            element={user.username ? <Learn /> : <Navigate to="/login" />}
          />
          <Route
            path="/store"
            element={user.username ? <Store /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={user.username ? <ContactForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/notifications"
            element={user.username ? <Notifications /> : <Navigate to="/login" />}
          />
          <Route
            path="/admindashboard"
            element={admin ? <AdminDashboard /> : <Navigate to="/login" />}
          />

          {/* Miscellaneous */}
          <Route path="/unauth-page" element={<UnauthPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer isAdmin={admin} />
    </div>
  );
};

export default App;
