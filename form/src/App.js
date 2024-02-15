import { useState, useRef } from "react";
import Input from "./Components/Input";
import Role from "./Components/Role";
import Profile from "./Components/Profile";
import Server from "./Components/Server";
import Button from "./Components/Button";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  function validateForm(e) {
    e.preventDefault();
    let regexDigit = /\d/;
    let regexUpper = /[A-Z]/;

    if (userName.length === 0) {
      setErrors((prev) => ({
        ...prev,
        userName: "**username cannot be blank",
      }));
    } else if (userName.length < 7) {
      setErrors((prev) => ({
        ...prev,
        userName: "**length of username is too short",
      }));
    } else {
      setErrors((prev) => ({ ...prev, userName: "" }));
    }
    if (password === "") {
      setErrors((prev) => ({
        ...prev,
        password: "**password cannot be blank",
      }));
    } else {
      if (password.length < 8) {
        setErrors((prev) => ({
          ...prev,
          password: " **minimum length of password should be 8 characters",
        }));
        return false;
      } else if (password.length > 15) {
        setErrors((prev) => ({
          ...prev,
          password: " **maximum length of password is 15 characters",
        }));
      } else if (!regexDigit.test(password)) {
        setErrors((prev) => ({
          ...prev,
          password: "**password should have at-least one digit",
        }));
      } else if (!regexUpper.test(password)) {
        setErrors((prev) => ({
          ...prev,
          password: "**password should have at-least one uppercase letter",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: " " }));
      }
    }
  }
  const handleReset = () => {
    setUserName("");
    setPassword("");
    setErrors({});
    formRef.current.reset();
  };

  return (
    <div className="main">
      <form
        action="#"
        name="myForm"
        onSubmit={validateForm}
        method="post"
        ref={formRef}
      >
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
          <Button type="button" title="Reset" handleReset={handleReset} />
        </div>
      </form>
    </div>
  );
}

export default App;
