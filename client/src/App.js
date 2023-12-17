import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Navbar />
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles-list' element={<ArticlesList />} />
          <Route path='/article/:name' element={<Article />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
