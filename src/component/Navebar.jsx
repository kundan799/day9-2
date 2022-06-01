import React, { useContext } from "react";
import { AuthContext } from "../ontext/Authcontext";

const Navebar = () => {
    const {isAuthorized,Login,Logout}=useContext(AuthContext);
  return (
    <div>
      <nav className="nav">
          <div className="container">
              <h1>Logo</h1>
              <h3>Home</h3>
              <h3>About</h3>
          </div>
          <div className="container1">
          <button onClick={()=>{if(isAuthorized)Logout();
      else  Login("R","2");
      }}>
        {isAuthorized ? "Logout" :"Login"}</button>
              <button>Signup</button>

          </div>

      </nav>
    </div>
  );
};

export default Navebar;
