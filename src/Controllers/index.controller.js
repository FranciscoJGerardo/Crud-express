import { __dirname } from "../path.js";
import { pool } from "../Connection/db.js";

export const getPage = async (req, res) => {
  var [rows] = await pool.query("SELECT * FROM usuarios");
  res.render("index", { rows });
};
export const createUser = async (req, res) => {
  const { nombre, dni, direccion, telefono, correo } = req.body;
  const newUsuario = {
    nombre,
    dni,
    direccion,
    telefono,
    correo,
  };
  await pool.query("INSERT INTO usuarios SET ?", [newUsuario]);
  res.redirect("/tareas");
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
  res.redirect("/tareas");
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, dni, direccion, telefono, correo } = req.body;
  const updateUser = {
    nombre,
    dni,
    direccion,
    telefono,
    correo,
  };

  await pool.query("UPDATE usuarios SET ? WHERE id = ?", [updateUser, id]);
  res.redirect("/tareas");
};

export const findUser = async (req, res) => {
  const { nombre } = req.body;
  await pool.query("SELECT from usuarios WHERE nombre = ?", [nombre]);
};

export const getpageUser = async (req, res) => {
  res.render("addUsers");
};

export const getpageUpdate = async (req, res) => {
  const { id } = req.params;
  var [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ? ", [id]);

  res.render("editUsers", { rows });
};
export const searchUser = async (req, res) => {
  const { dni } = req.params;
  var [rows] = await pool.query("SELECT * FROM usuarios WHERE dni = ?", [dni]);
  res.render("index", { rows });
  console.log(dni);
};
