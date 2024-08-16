import { useContext } from "react";
import { AuthContext} from "../context/AuthContext";

const useSignup = () => {
  const { setUser } = useContext(AuthContext);

  const signup = async ({
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
  }) => {
    if (!firstName || !lastName || !username || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const responce = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
          confirmPassword,
        }),
      });

      const data = await responce.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { signup };
};

export default useSignup;
