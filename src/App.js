import React, { useEffect } from "react";
import Approutes from "./routes/Approutes";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTabClose = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("admin");
    };

    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
      }
    };

    checkToken();

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  return (
    <>
      <Approutes />
    </>
  );
}

export default App;
