import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Home from './Components/Home';
import Loginoption from './Components/LoginOption';
import User from './Components/User';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Otp from './Components/Otp';

function App() {
  return (
    <>
  
    <BrowserRouter>
   
   
    <Routes>
      {/* <Route path='/' element={<Header/>}/> */}
      <Route path='/' element={<LandingPage/>}/>

        <Route path='signup' element={<Signup/>}/>
        <Route path='loginoption' element={<Loginoption/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='otp' element={<Otp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
