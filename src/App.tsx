import { Route, Routes } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm.js";
import SignupForm from "./_auth/forms/SignupForm.js";
import Home from "./_root/Pages/Home.js";
import AuthLayout from "./_auth/AuthLayout.js";
import RootLayout from "./_root/RootLayout.js";

function App() {
  return (
    <main className="h-screen flex">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SigninForm />} />
          <Route path="sign-in" element={<SignupForm />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
