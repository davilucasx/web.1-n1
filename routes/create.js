var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var usersDAO = require("../src/models/dao/usersDAO")//require("../src/models/dao/usersDAO");

const uri = "mongodb+srv://davilucas11:lucas123@cluster0.on2osm1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

router.post("/", async function (req, res, next) {
  const form = req.body;
  const users_form = {
    nome: form.nome,
    email: form.email,
    senha: form.senha,
  };
  try {
    await client.connect();
    const results = await usersDAO.insertUser(client, users_form);
    res.render("login", { results: results });
  } catch (err) {
    res.send(err);
  } finally {
    await client.close();
  }
});

module.exports = router;
