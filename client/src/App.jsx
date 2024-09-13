import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/admin/layout";
import AuthLayout from "./components/auth/layout";
import CheckAuth from "./components/common/check-auth";
import ShoppingLayout from "./components/shopping/layout";
import AdminDashboard from "./pages/admin/dashboard";
import AdminFeatures from "./pages/admin/features";
import AdminOrders from "./pages/admin/orders";
import AdminProducts from "./pages/admin/products";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ShoppingAccount from "./pages/shopping/account";
import ShoppingCheckout from "./pages/shopping/checkout";
import ShoppingHome from "./pages/shopping/home";
import ShoppingListing from "./pages/shopping/listing";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
