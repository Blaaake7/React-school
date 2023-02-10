import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoodsDetail from './components/GoodsDetail';
import Header from './components/Header';
import Benefit from './pages/Benefit';
import Best from './pages/Best';
import Main from './pages/Main';
import NewProduct from './pages/NewProduct';
import SearchPage from './pages/SearchPage';
import TimeSales from './pages/TimeSales';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/best' element={<Best />} />
          <Route path='/time-sales' element={<TimeSales />} />
          <Route path='/benefit' element={<Benefit />} />
          <Route path='/goods/:name' element={<GoodsDetail />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
