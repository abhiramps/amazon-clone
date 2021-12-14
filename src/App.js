import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.scss';
import Cart from './Components/cart/Cart';
import Checkout from './Components//Checkout/Checkout';
import Home from './Components/Home/Home';
import Details from './Components/Products/Details';

import Layout from './Layout/Layout';

function App() {
  return (
      <BrowserRouter>

        <Layout>
          <Routes>
            <Route  path='/cart' element={<Cart/>} />
            <Route  path='/details/:ProdId' element={<Details/>} />
            <Route  path='/checkout' element={<Checkout/>} />
            <Route exact path='/' element={<Home/>} />
          </Routes>
        </Layout>

      </BrowserRouter>
  );
}

export default App;
