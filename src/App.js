import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashbord/cdashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard"  element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
