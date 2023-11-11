import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
