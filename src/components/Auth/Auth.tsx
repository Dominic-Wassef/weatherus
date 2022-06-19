import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Login } from "./styled";

const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const result = login({ email, password });
    if (result) {
      navigate('/');
    }
  };

  return (
  <div>
    <Login>
    <h1>
      Sign In
    </h1>
    <span>
      <label>
        {" "}
        Email address{" "}
      </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
      <label
        htmlFor="password"
      >
        {" "}
        Password{" "}
      </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required/>
        <label
          htmlFor="remember-me"
        >
          {" "}
          Remember me{" "}
          
        </label>
      <button
        type="submit"
        onClick={handleLogin}
      >
        Sign in
      </button>
      </span>
      </Login>
    </div>
  );
};

export default Auth;