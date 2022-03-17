import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute path="/movies">
          <Movies />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
