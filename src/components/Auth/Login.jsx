import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // Two way Binding
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault; //it stops default behavior
    console.log("Email is", email);
    console.log("Password is", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-40">
        <form
          // creating a function
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email Address"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400 mt-4"
            type="password"
            placeholder="Enter Password"
          />

          <button
            className=" text-white outline-none border-none bg-emerald-600 text-xl py-4 px-5 w-full rounded-full placeholder:text-white mt-5"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
