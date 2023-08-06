import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';

import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CodeForInterview/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/all' element={<AllUsers/>} />
      </Routes>
    </Router>
  );
}

export default App;
