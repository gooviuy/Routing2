import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Private from "./components/Private";
import PrivateRoute from "./components/PrivateRoute";
import Public from "./components/Public";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/public">Public</Link>
        </li>
        <li>
          <Link to="/private">Private</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/public" component={Public} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/private" component={Private} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
