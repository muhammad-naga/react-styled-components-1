// Components
import { Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
