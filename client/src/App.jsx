import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateRequest from './pages/CreateRequest';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;