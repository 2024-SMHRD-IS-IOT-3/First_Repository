
import './App.css';

//아래는 bootstrap import임
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

//components, pages
import Header from './components/Header';
import Main from './Pages/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Join from './components/Join';
import ButtonList from './components/ButtonList';

function App() {
  return (
   <div className='container'>
    <Header/>
   

    <Routes>
      <Route path='/' element={<Main/>}></Route> 
      {/* 첫화면 */}
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/join' element={<Join/>}></Route>
    </Routes>
    
    <ButtonList/>
    <Footer/>
   </div>
  );
}

export default App;
