import './App.css';
import Nav from './components/nav';

import Footer from './components/footer';
import Signup from './components/signup';
import Login from './components/login';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>product listing page</h1>}/>
        <Route path="/add" element={<h1>Add product page</h1>}/>
        <Route path="/update" element={<h1>Update product page</h1>}/>
        <Route path="/profile" element={<h1>Profile page</h1>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
