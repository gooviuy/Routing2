import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const result = await axios.post("https://ha-auth-react.now.sh/auth", {
        username,
        password,
      });

      localStorage.setItem("token", result.data.token);
      // redireccionar a /private
      history.replace("/private");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          required
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div>Usuario o contraseña incorrecto</div>}
      {loading && <div>Autenticando...</div>}
      <button disabled={loading}>Login</button>
    </form>
  );
}

export default Login;
