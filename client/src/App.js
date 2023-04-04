
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import toast ,{Toaster} from "react-hot-toast";
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Summary from './pages/Summary';
function App() {
  return (
    <>
   <Navbar/>
   <Routes>
<Route path='/' element={<Homepage/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/summary' element={<Summary/>}></Route>
   </Routes>
   </>
  );
}

export default App;
