import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

const AppRoutes = () => {
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
}

export default AppRoutes;
