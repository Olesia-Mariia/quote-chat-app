import { useContext } from "react";
import { AuthContext} from "../context/AuthContext";

const useLogin = () => {
  const { setUser } = useContext(AuthContext);

  const login = async ({ username, password }) => {
    try {
      const responce = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      const data = await responce.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return { login };
};

export default useLogin;
