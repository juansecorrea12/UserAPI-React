import React from "react";
import { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {},
    };
  }

  addUser = (event) => {
    event.preventDefault();
    console.log("se ha creado un nuevo usuario");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(this.state.newUser),
    };

    fetch(this.props.url, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.props.listUser();
        // console.log("aqui elimina ----------");
        // this.clearSpaces();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  // clearSpaces = (event) => {
  //   event.target.value = "";
  // };

  handleInput = (event) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="formulario">
        <form onInput={this.handleInput} onSubmit={this.addUser}>
          <h2>Agrega un usuario</h2>
          <p>
            <label htmlFor="name">Nombre</label>
            <input
              className="b-bottom"
              placeholder="Escribe un nombre"
              type="text"
              name="name"
              id="name"
              required
            />
          </p>
          <p>
            <label htmlFor="lastName">Apellido</label>
            <input
              className="b-bottom"
              placeholder="Escribe un apellido"
              type="text"
              name="lastname"
              id="lastName"
              required
            />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input
              className="b-bottom"
              placeholder="Escribe un email"
              type="email"
              name="email"
              id="email"
              required
            />
          </p>
          <p>
            <label htmlFor="contrasena">Contraseña</label>
            <input
              className="b-bottom"
              placeholder="Escribe una contraseña"
              type="password"
              name="password"
              id="contrasena"
              required
            />
          </p>
          {/* <input type="submit" value="Agregar Ususario" /> */}
          <button type="submit" className="btn">
            Agregar Usuario
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form>
      </div>
    );
  }
}
