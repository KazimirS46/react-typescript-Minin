import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutPage } from './Pages/AboutPage';
import { ProductPage } from './Pages/ProductsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
