import './App.css';
import Home from './components/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;