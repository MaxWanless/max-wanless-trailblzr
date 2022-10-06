import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ParksContext = createContext();

export const ParksProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [parks, setParks] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/parks`)
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
