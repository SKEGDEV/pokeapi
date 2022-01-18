import Nav from './components/navs.jsx';
import Page1 from './components/all_page1.jsx';
import Page2 from './components/all_page2.jsx';
import Page3 from './components/all_page3.jsx';
import Footer from './components/footer';
import Search from './components/search.jsx';
import Home from './components/home.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
<Router>
    <div>
      <Nav />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all/p-1" element={<Page1 />}/>
          <Route path="/all/p-2" element={<Page2 />}/>
          <Route path="/all/p-3" element={<Page3 />}/>
          <Route path="/search" element={<Search />} />
        </Routes>
      
      <Footer />
    </div>
</Router>
  );
}

export default App;
