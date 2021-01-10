import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Home = () => {
  const { user } = useAuth0();
  return <div></div>;
};

export default Home;
