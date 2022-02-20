import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./componet/Navbar";
import NotFound from './componet/NotFound';
import Home from "./componet/Home";
import AddUser from "./componet/AddUser";
import AllUser from "./componet/AllUser";
import EditUser from './componet/EditUser';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/add' element={<AddUser/>} />
    <Route path='/all' element={<AllUser/>} />
    <Route path='/edit/:id' element={<EditUser/>} />
    <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;


