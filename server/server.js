

const cors = require("cors");
const express = require("express")
const mysql = require("mysql");

const db =  mysql.createPool({host:"localhost", user:"root", password:"141199", database:"notas"})
const app = express();

app.use(cors())
app.use(express.json);

app.post("/teste", (req, res) =>{
    const {id} = req.body
    const {titulo} = req.body
    const {descricao} = req.body
    const {data} = req.body
    const {cor} = req.body

    let sql = "INSERT INTO tbl_notas (id, titulo, descricao, data, cor) VALUES ( ?,?,?,?,? )"

    db.query(sql,[id, titulo, descricao, data,cor], (err, result) =>{
        console.log(err)
    })
})
app.listen(5173, () => {
    console.log("Servidor rodando");
});
