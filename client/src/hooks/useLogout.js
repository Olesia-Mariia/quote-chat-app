import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useLogout = () => {
  const { setUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      const responce = await fetch(
        "https://quote-chat-app.onrender.com/auth/logout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      const data = await responce.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("user");
      setUser(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { logout };
};

export default useLogout;
