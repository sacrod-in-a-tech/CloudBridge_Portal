import React, { useEffect, useState } from "react";
import { fetchTest } from "../services/api";
const Home = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetchTest().then(setMessage);
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <p>Backend says: {message}</p>
    </div>
  );
};
export default Home;
