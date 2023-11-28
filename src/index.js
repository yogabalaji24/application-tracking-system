import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Python from "./pages/Python";
import Machine from "./pages/Machine";
import Matlab from "./pages/Matlab";
import Cpro from "./pages/Cpro";
import Settings from "./pages/Settings";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="About" element={<About />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Machine" element={<Machine />} />
        <Route path="Python" element={<Python />} />
        <Route path="Matlab" element={<Matlab />} />
        <Route path="Cpro" element={<Cpro />} />
        <Route path="Settings" element={<Settings />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);