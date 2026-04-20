import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { Toaster } from './components/ui/sonner';

function App() {
  useEffect(() => {
    document.title = 'Devsync – Developer Portfolio Template';
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" theme="dark" />
    </div>
  );
}

export default App;
