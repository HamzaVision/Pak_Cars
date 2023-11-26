import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import SignUp from "./Components/signUp";
import SignIn from "./Components/signIn";
import Profile from "./Components/profile";
import PostCarAdd from "./Components/postCarAdd";
import MyAds from "./Components/myAds";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home/:id" component={Home} />
        <Route exact path="/myProfile/:id" component={Profile} />
        <Route exact path="/postCarAdd/:id" component={PostCarAdd} />
        <Route exact path="/myAds/:id" component={MyAds} />
      </Switch>
    </div>
  );
}

export default App;
