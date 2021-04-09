import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path ="/" component= { Home } />
      </Switch>
    </HashRouter>
  );
}

export default App;
