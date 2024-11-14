import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBanner from './components/HeaderBanner';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HeaderBanner />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>

      <Footer />

    </Router>
  );
};

export default App;