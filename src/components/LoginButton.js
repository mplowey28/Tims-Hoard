import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Log In
    </button>
  );
};

export default LoginButton;
