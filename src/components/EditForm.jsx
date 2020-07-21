import React from "react";

export default function EditForm(props) {
  const { name, lastname, email, password } = props.user;

  return (
    <div className="formulario">
      <form onInput={props.handleInputEdit} onSubmit={props.updateUser}>
        <h2>Edita un usuario</h2>
        <p>
          <label htmlFor="name">Nombre</label>
          <input
            className="b-bottom"
            placeholder="Escribe un nombre"
            type="text"
            name="name"
            value={name}
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
            value={lastname}
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
            value={email}
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
            value={password}
            required
          />
        </p>
        {/* <input type="submit" value="Agregar Ususario" /> */}
        <button type="submit" className="btn">
          Editar Usuario
          <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </form>
    </div>
  );
}
