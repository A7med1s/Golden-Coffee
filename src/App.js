// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Partnership from './components/Partnership';
import PayPage from './components/PayPage';
function App() {
  
  return(
  <>
    <BrowserRouter>
    <div className="App">
      
      <NavBar/>
        <Routes>
          <Route index element={<Home/>} path='/'/>
          <Route element={<Cart/>} path='cart'/>
          <Route element={<Products/>} path='products'/>
          <Route element={<AboutUs/>} path='about-us'/>
          <Route element={<Partnership/>} path='partnership'/>
          <Route element={<PayPage/>} path='pay-page'/>

        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  </>
  )

}




export default App;

