import { useState, useEffect } from "react";

export const useLocalStorage = (key) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem(key));
    if (!key) {
      console.log("No key provided");
    }
    console.log(token);
    return () => {};
  });
  return token;
};
