import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthLayout, MainLayout } from "../layout";
import { Dashboard, Home, Login, NotFound, Profile, Settings } from "../pages";
import { AddFood, ListFood } from "../pages/food";
import { OrdersList } from "../pages/orders";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes (AuthLayout) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Route>

        {/* Protected routes (MainLayout) */}
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/food" element={<ListFood />} />
          <Route path="/food/create" element={<AddFood />} />
          <Route path="/orders" element={<OrdersList />} />
        </Route>

        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
