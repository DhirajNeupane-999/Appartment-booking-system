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
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment!
        </p>
        <div className="w-full">
          <p>Full Name</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(e) => setName(e.target.value)} value={name} required/>
        </div>

        <div className="w-full">
          <p>Email</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>

        <div className="w-full">
          <p>Password</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">{state === "Sign Up" ? "Create Account" : "Login"}</button>
      </div>
    </form>
  );
};

export default Login;
