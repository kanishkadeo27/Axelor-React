import { useState } from "react";
import Input from "./Components/Input";
import Role from "./Components/Role";
import Profile from "./Components/Profile";
import Server from "./Components/Server";
import Button from "./Components/Button";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm(e) {
    e.preventDefault();

    if (userName.length === 0) {
      setErrors({
        userName: "**username cannot be blank",
      });
      return false;
    }
    if (userName.length < 7) {
      setErrors({
        userName: "**length of username is too short",
      });
      return false;
    }
    setErrors({});
    if (password === "") {
      setErrors({
        password: "**password cannot be blank",
      });
      return false;
    }
    if (password.length < 8) {
      setErrors({
        password: " **minimum length of password should be 8 characters",
      });
      return false;
    }
    if (password.length > 15) {
      setErrors({
        password: " **maximum length of password is 15 characters",
      });
      return false;
    }
    let regexDigit = /\d/;
    let regexUpper = /[A-Z]/;

    if (!regexDigit.test(password)) {
      setErrors({
        password: "**password should have at-least one digit",
      });
      return false;
    }

    if (!regexUpper.test(password)) {
      setErrors({
        password: "**password should have at-least one uppercase letter",
      });
      return false;
    }
  }

  return (
    <div className="main">
      <form action="#" name="myForm" onSubmit={validateForm} method="post">
        <Input
          label="Username"
          name="userName"
          placeholder="Enter the user name..."
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onBlur={validateForm}
          errors={errors}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter the password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={validateForm}
          errors={errors}
        />

        <Input
          name="city"
          label="City of employment:"
          id="city"
          placeholder="Enter your city"
        />

        <Server label={"WebServer"} />

        <Role label="Specify your role:" />

        <Profile label="Single Sign-on to the following:" />

        <div>
          <Button type="submit" title="Login" />
          <Button type="reset" title="Reset" />
        </div>
      </form>
    </div>
  );
}

export default App;
