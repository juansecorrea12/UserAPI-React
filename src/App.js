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
    this.getList();
  }

  getList = () => {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((result) => this.setState({ users: result.data }))
      .catch((error) => console.log(error));
  };

  deleteUser = (index) => {
    const optionsDelete = {
      method: "DELETE",
    };

    // Elimina
    const urlDinamica =
      "https://academlo-api-users.herokuapp.com/user/" + index;

    fetch(urlDinamica, optionsDelete)
      .then((response) => {
        response.json();
      })
      .then((result) => {
        console.log(result);
        // Actualiza cuando tiene el resultado
        this.getList();
      });
  };

  render() {
    return (
      <div>
        <Formulario url={this.state.url} listUser={this.getList} />
        <div className="tablas">
          <h1>Usuarios del sistema</h1>
          <div className="cards">
            {this.state.users.map((user, index) => {
              return (
                <div className="card col-4" key={index}>
                  <h5>{user.name}</h5>
                  <span>{user.email}</span>
                  <button
                    className="btn-delete"
                    onClick={() => {
                      this.deleteUser(user.id);
                    }}
                  >
                    Eliminar Usuario
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
