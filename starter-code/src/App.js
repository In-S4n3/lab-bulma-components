import React, { Component } from "react";
import Navbar from "./component/NavBar";
import FormField from "./component/FormField";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Smith"
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <br />
        <button className="button is-rounded my-class is-danger is-small">
          Button 1
        </button>
        <button className="button is-small is-success">Button 2</button>
      </div>
    );
  }
}

export default App;
