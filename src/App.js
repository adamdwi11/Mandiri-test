import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//component
import CoinList from './components/coin/CoinList';
import Home from './components/coin/index'
import DetailCoin from './components/coin/DetailCoin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}>
          <Route path={'/'} element={<CoinList />} />
          <Route path={'/:id'} element={<DetailCoin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
