import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import PrivateRoute from './components/PrivateRoute';
import history from './util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies" exact>
        <Movies />
      </PrivateRoute>
      <PrivateRoute path="/movies/:movieId" exact>
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
