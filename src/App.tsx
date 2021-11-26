import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
// Components
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
// Pages

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
