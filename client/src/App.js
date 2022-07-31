import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile.JS';
import Createpost from './components/screens/Createpost';
function App() {
  return (
    <div className="App">
           <Router>
<Navbar />

  <Routes>
  <Route path="/" exact element={<Home></Home>} />
  <Route path="/profile" exact element={<Profile></Profile>} />
  <Route path="/signin" exact element={<Login></Login>} />
  <Route path="/signup" exact element={<Signup></Signup>} />
  <Route path="/createpost" exact element={<Createpost></Createpost>} />
  </Routes>
</Router>
        
    </div>
  );
}

export default App;
