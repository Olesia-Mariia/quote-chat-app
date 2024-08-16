import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="card-container">
      <h1 className="card-title">Signup</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname" className="lable">
            First Name
          </label>
          <input
            className="input"
            id="firstname"
            type="text"
            placeholder="Enter your first name"
            required
            value={inputs.firstName}
            onChange={(e) =>
              setInputs({ ...inputs, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastname" className="lable">
            Last Name
          </label>
          <input
            className="input"
            id="lastname"
            type="text"
            placeholder="Enter your last name"
            required
            value={inputs.lastName}
            onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
          />
        </div>
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
        <div>
          <label htmlFor="confirmpassword" className="lable">
            Confirm password
          </label>
          <input
            className="input"
            id="confirmpassword"
            type="password"
            placeholder="Confirm password"
            required
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <Link to={"/login"} className="link">
        Aleady have an account?
      </Link>
    </div>
  );
};

export default Signup;
