import { __dirname } from "../path.js";
import { pool } from "../Connection/db.js";

export const getPage = async (req, res) => {
    var [rows] = await pool.query('SELECT * FROM usuarios');
    console.log(rows);
    res.render('index',{ rows })
     
};
export const createUser = async (req,res) =>{
    
}
export const deleteUser = async (req,res) =>{

}

export const updateUser = async (req,res) =>{
    
}
export const findUser = async (req,res) =>{
    
}