import axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // console.log('axios', resp);
      setPizzas(data.pizzas);
    });

    /* fetch('http://localhost:3000/db.json')
      .then((resp) => {
        console.log('fetch', resp);
        return resp.json();
      })
      .then((json) => {
        setPizzas(json.pizzas);
      }); */
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
