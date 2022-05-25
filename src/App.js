import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from '../src/Pages/Login/RequireAuth'
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/part/:partId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
