import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import SignUp from "./Components/signUp";
import SignIn from "./Components/signIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
