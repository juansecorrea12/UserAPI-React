import React, { Component } from "react";
import Formulario from "./components/formulario.jsx";
import EditForm from "./components/EditForm.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userEdited: { name: "", lastname: "", email: "", password: "" },
      url: "https://academlo-api-users.herokuapp.com/users",
      show: false,
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

  showUsers = () => {
    return this.state.users.map((user, index) => {
      return (
        <div className="card col-4" key={index}>
          <div className="header-user">
            <h4>{user.name}</h4>
            <button
              onClick={() => {
                this.setUser(user);
              }}
            >
              <i className="fas fa-user-edit"></i>
            </button>
          </div>
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
    });
  };

  changeShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  updateUser = (event) => {
    event.preventDefault();

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(this.state.userEdited),
    };

    const urlPUT =
      "https://academlo-api-users.herokuapp.com/user/" +
      this.state.userEdited.id;

    fetch(urlPUT, options)
      .then((response) => response.json())
      .then((result) => this.getList())
      .catch((error) => console.log(error));
  };

  setUser = (user) => {
    this.setState({
      userEdited: user,
    });
    this.changeShow();
  };

  handleInputEdit = (event) => {
    this.setState({
      userEdited: {
        ...this.state.userEdited,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        {!this.state.show ? (
          <Formulario url={this.state.url} listUser={this.getList} />
        ) : (
          <EditForm
            user={this.state.userEdited}
            handleInputEdit={this.handleInputEdit}
            updateUser={this.updateUser}
          />
        )}
        <hr className="line-between"></hr>
        <div className="tablas">
          <div className="headerContent">
            <h1>Usuarios del sistema</h1>
          </div>
          <div className="cards">{this.showUsers()}</div>
        </div>
      </div>
    );
  }
}

export default App;
