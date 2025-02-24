

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Learn from './Pages/Learn';
// import AdminLayout from './Components/admin-view/Layout';
// import AdminDashboard from './Pages/admin-view/Dashboard';
// import AdminProducts from './Pages/admin-view/Products';
// import AdminOrders from './Pages/admin-view/Orders';
// import AdminFeatures from './Pages/admin-view/AdminFeatures';
// import AuthLogin from './Pages/Authentication/Login';
// import AuthRegister from './Pages/Authentication/Registeration';
// import ShoppingCheckout from './Pages/shopping-view/Checkout';
// import ShoppingHome from './Pages/shopping-view/ShoppingHome'
// import ShoppingListing from './Pages/shopping-view/ShoppingList'

// const App = () => {
//   return (
//     // <Router>
//     <div className='min-h-screen flex flex-col'>
//       <Navbar />
//       <main className='flex flex-1'>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/learn" element={<Learn />} />
//           <Route path="/Login" element={<AuthLogin />} />
//           <Route path="/Registeration" element={<AuthRegister />} />
//           {/* Admin Routes */}
//           <Route path="/admin" element={<AdminLayout />} />
//           <Route path="/Dashboard" element={<AdminDashboard />} />
//           <Route path="/Products" element={<AdminProducts />} />
//           <Route path="/Orders" element={<AdminOrders />} />
//           <Route path="/Features" element={<AdminFeatures />} />

//           <Route path="/shop" element={<shoppingLayout />}>
//             <Route path="home" element={<ShoppingHome />} />
//             <Route path="Listing" element={<ShoppingListing />} />
//             {/* <Route path="Checkout" element={<ShoppingCheckout />} />
//             <Route path="Account" element={<ShoppingAccount />} /> */}
//             {/* <Route path="*" element={<NotFound />} /> */}
//           </Route>


//         </Routes>
//       </main>
//       <Footer />
//     </div>
//     // </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Public Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';

// Authentication
// import AuthLogin from './Pages/Authentication/Login';
// import AuthRegister from './Pages/Authentication/Registeration';
// import AuthLayout from './Pages/Authentication/AuthLayout'; // Added missing import

// Admin Views
// import AdminLayout from './Components/admin-view/Layout';
// import AdminDashboard from './Pages/admin-view/Dashboard';
// import AdminProducts from './Pages/admin-view/Products';
// import AdminOrders from './Pages/admin-view/Orders';
// import AdminFeatures from './Pages/admin-view/AdminFeatures';

// Shopping Views
// import ShoppingLayout from './Pages/shopping-view/ShoppingLayout';
// import ShoppingHome from './Pages/shopping-view/ShoppingHome';
// import ShoppingListing from './Pages/shopping-view/ShoppingList';
// import ShoppingCheckout from './Pages/shopping-view/Checkout';

// 404 Not Found
import NotFound from './Pages/not-found';

// Store Page
// import Store from './Store';
// import CheckAuth from './Components/common/check-auth';
// import UnauthPage from './Pages/unauth-page';

const App = () => {
  const isAuthenticated = false;
  const user = null;

  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            {/* <Route path="/login" element={<AuthLogin />} />
            <Route path="/register" element={<AuthRegister />} /> */}

            {/* Authentication */}
            {/* <Route path="/auth/*" element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            } /> */}



            {/* Admin Routes */}
            {/* <Route path="/admin/*" element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
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
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout/>
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
            {/* <Route path="/unauth-page" element={<UnauthPage/>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
