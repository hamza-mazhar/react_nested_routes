import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Module from "./Module";

export default class Modules extends Component {
  render() {
    let modules = this.props.modules;
    console.log(this.props);
    return (
      <>
        <h1>Modules Component</h1>
        <ul>
          {modules.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${id}`}>{`${name}`}</Link>
            </li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}
