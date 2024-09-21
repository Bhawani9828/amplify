
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home2 from './pages/Home2';
import About from './pages/About';
import Footer from './components/Footer';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Partners from './pages/Partners';
import Features from './pages/Features';
import Error404 from './pages/ErrorPage';


function App() {
  return (
    <>
    <div className="page-wrapper relative z-[1] bg-white">
    <Header/>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/features" element={<Features />} />
        <Route path="/error" element={<Error404 />} />
      </Routes>
    <Footer/>
   
    </div>
    
    </>
  )
}

export default App
