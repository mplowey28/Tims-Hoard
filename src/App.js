import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Silver from "./views/Silver";
import Gold from "./views/Gold";
import USPaper from "./views/USPaper";
import USCoin from "./views/USCoin";
import WorldCoin from "./views/WorldCoin";
import ProtectedRoute from "./auth/protectedRoute";
import Sidebar from "./components/Sidebar";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Sidebar />
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
