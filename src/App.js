import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/NavBar";
import { Home, Silver, Gold, USPaper, USCoin, WorldCoin } from "./views";
import ProtectedRoute from "./auth/protectedRoute";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/silver" component={Silver} />
          <ProtectedRoute path="/gold" component={Gold} />
          <ProtectedRoute path="/uspaper" component={USPaper} />
          <ProtectedRoute path="/uscoin" component={USCoin} />
          <ProtectedRoute path="/worldcoin" component={WorldCoin} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
