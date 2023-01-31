import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AppContainer } from './appStyle';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Skeleton from './components/Skeleton';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Navbar />
        <Cart />
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='/s' element={<Skeleton />}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
