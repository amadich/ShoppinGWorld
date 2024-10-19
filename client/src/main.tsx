import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.tsx'
import './index.css'
import Header from './components/Header.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Header />
    <Home />
  </Router>,
)
