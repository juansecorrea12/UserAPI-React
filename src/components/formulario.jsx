import React from "react";
import { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addUser = (event) => {
    event.preventDefault();
    console.log("se ha creado un nuevo usuario");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(this.state),
    };

    fetch(this.props.url, options)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="formulario">
        <form onInput={this.handleInput} onSubmit={this.addUser}>
          <h2>Formulario</h2>
          <p>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
          </p>
          <p>
            <label htmlFor="lastName">Apellido</label>
            <input type="text" name="lastname" id="lastName" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label htmlFor="contrasena">Contraseña</label>
            <input type="text" name="password" id="contrasena" />
          </p>
          <input type="submit" value="Agregar Ususario" />
        </form>
      </div>
    );
  }
}
