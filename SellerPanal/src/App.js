import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useSelector } from "react-redux";

import { Navbar } from "./components";

import {Login, Signup, Dashboard} from './pages/index'
import View from "./pages/userView/View";

function App() {
  const user = useSelector(state => state.user);
 
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="api/seller/:id" element={<View/>} />
        {
          !user ? (
            <>
               <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            </>
          ): (
            <>
            <Route path='/' element={<Dashboard/>}/>
         </>
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;

