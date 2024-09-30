const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = [
    {
        username: 'solartrackers',
        password: bcrypt.hashSync('maxiprofe2024', 10),
    },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
