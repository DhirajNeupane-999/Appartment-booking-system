import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  console.log(name);
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (state === "Sign Up") {
      console.log("Sign Up");
    } else {
      console.log("Login");
    }
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div>
        <p>{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment!
        </p>
        <div>
          <p>Full Name</p>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} required/>
        </div>

        <div>
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>

        <div>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>
        <button>{state === "Sign Up" ? "Create Account" : "Login"}</button>
      </div>
    </form>
  );
};

export default Login;
