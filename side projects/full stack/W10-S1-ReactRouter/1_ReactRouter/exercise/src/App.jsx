// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  
  const [page, setPage] = useState('home');

  // TODO: How doe sthe Layout component know which page to render?

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout selectedPage="/"><HomePage></HomePage></Layout>} />
          <Route path="/about" element={<Layout selectedPage="/about"><AboutPage></AboutPage></Layout>} />
          <Route path="/contact" element={<Layout selectedPage="/contact"><ContactPage></ContactPage></Layout>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

/*function App() {

  const [page, setPage] = useState('home');

  // TODO: How doe sthe Layout component know which page to render?

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
  );
}

/*return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/about" element={AboutPage} />
          <Route path="/contact" element={ContactPage} />
        </Routes>
      </div>
    </Router>
  );*/