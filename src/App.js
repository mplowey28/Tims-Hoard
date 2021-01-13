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
import Footer from "./components/Footer";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/silver" component={Silver} />
          <Route path="/gold" component={Gold} />
          <Route path="/uspaper" component={USPaper} />
          <Route path="/uscoin" component={USCoin} />
          <Route path="/worldcoin" component={WorldCoin} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;
