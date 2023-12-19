var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var usersDAO = require("../src/models/dao/usersDAO");

const uri = "mongodb+srv://davilucas11:lucas123@cluster0.on2osm1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

router.post("/", async function (req, res, next) {
    const form = req.body;
    const users_form = {
      email: form.email,
      senha: form.senha,
    };
  try {
    await client.connect();
    const user = await usersDAO.getUserByEmail(client, users_form.email);

    if (!user) {
      res.send("Usuário não encontrado");
      return;
    }

    if (user.senha !== users_form.senha) {
      res.send("Senha incorreta");
      return;
    }
    res.render("album");
    // Autenticação bem-sucedida, aqui você pode criar uma sessão para o usuário, por exemplo
    //req.session.user = user // Isso é um exemplo simples, você pode usar sessões, tokens JWT, etc.

  } catch (err) {
    res.send(err);
  } finally {
    await client.close();
  }
});


module.exports = router;