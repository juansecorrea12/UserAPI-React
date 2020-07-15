import React, { Component } from "react";
import Formulario from "./components/formulario.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      url: "https://academlo-api-users.herokuapp.com/users",
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      // .then((respuesta) => {
      //   respuesta.json();
      // })
      .then((response) => response.json())
      .then((result) => this.setState({ users: result.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Formulario url={this.state.url} />
        <div className="tablas">
          <h1>Usuarios del sistema</h1>
          <table className="table header">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
          </table>
          {this.state.users.map((user, index) => {
            return (
              <table className="table" key={index}>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
