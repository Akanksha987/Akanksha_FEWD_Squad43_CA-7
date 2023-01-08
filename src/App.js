import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
        </Routes>

    </div>
  );
}

export default App;
