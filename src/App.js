import "./App.css";
import { MovieNow, MovieCardDetail } from "./Components/index";
import { Provider } from "react-redux";
import store from "./store";
import { Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <nav className="navbar navbar-dark bg-dark fixed-top header">
          <h4 className="navbar-brand">
            <Link to="/">Now Playing</Link>
          </h4>
          {/* <h4 className="navbar-brand">
        <Link to="/similar">Fav</Link>
      </h4> */}
        </nav>
        <Switch>
          <Route path="/:movieId">
            <MovieCardDetail />
          </Route>
          <Route path="/">
            <MovieNow />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
