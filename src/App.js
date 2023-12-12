import './App.css';
import Navi from './components/Navi';
import Banner from './components/Banner'
import styled from 'styled-components';
import Category from './components/Category';
import Row from './components/Row';
import requests from './api/request';
import { Outlet,Routes,Route } from 'react-router-dom';
import Mainpage from './pages/Main';
import SearchPage from './pages/Search';
import LoginPage from './pages/Login';

const Layout =() => {
  return (
    <div>
      <Navi />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        {/* <Route index element={<LoginPage/>}></Route> */}
        <Route path="main" element={<Mainpage/>}></Route>
        <Route path="search" element={<SearchPage/>}></Route>   
        <Route path=":movieId" element={<mvDeatil/>}></Route>
      </Routes>
    </div>

  )
}

export default App;
