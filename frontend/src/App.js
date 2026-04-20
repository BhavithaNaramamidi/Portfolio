import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { Toaster } from './components/ui/sonner';
import { ResumeProvider } from './context/ResumeContext';

function App() {
  useEffect(() => {
    document.title = 'Bhavitha Naramamidi – Product Designer';
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ResumeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </ResumeProvider>
      </BrowserRouter>
      <Toaster position="bottom-center" theme="dark" />
    </div>
  );
}

export default App;
