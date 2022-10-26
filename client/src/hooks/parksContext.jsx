import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

export const ParksContext = createContext();

export const ParksProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [parks, setParks] = useState(null);

  useEffect(() => {
    axios
      .get("/parks")
      .then((response) => {
        setParks(response.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <ParksContext.Provider value={{ parks, loading }}>
      {children}
    </ParksContext.Provider>
  );
};
