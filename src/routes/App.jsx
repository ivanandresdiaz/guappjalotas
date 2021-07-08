import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carrito from '../containers/Carrito/Carrito';
import Home from '../containers/Home/Home';
import Product from '../containers/Product/Product';
import Search from '../containers/Search/Search';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/carrito' component={Carrito} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/producto/:type/:key' component={Product} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
