import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import SignUp from "./Components/signUp";
import SignIn from "./Components/signIn";
import Profile from "./Components/profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home/:id" component={Home} />
        <Route exact path="/myProfile/:id" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
