import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const {login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="card-container">
      <h1 className="card-title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="lable">
            Username
          </label>
          <input
            className="input"
            id="username"
            type="text"
            placeholder="Enter username"
            required
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password" className="lable">
            Password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            placeholder="Enter password"
            required
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <Link to={"/signup"} className="link">
        Do not have an account?
      </Link>
    </div>
  );
};

export default Login;
