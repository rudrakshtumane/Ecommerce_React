import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import NotFound from "./components/NotFound";

import ProductList from './customHooks/ProductList';
import Middle from "./components/Middle";
// import Middle from "./components/Middle";
// import UserProducts from "./customHooks/UserProducts";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Middle/> */}
      <Routes>
        <Route path='/' element={<Middle/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ProductList' element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </>
  );
} 

export default App;
