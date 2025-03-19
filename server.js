const express = require('express');
const app = express();
const port =3000;

app.use(express.json());

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.post('/login',(req,res) => {
    const { email, password } = 
req.body;

    if (!email) {
        return
res.status(400).json({ error: "Email cannot be empty"});
    }
    if (!password) {
        return
res.status(400).json({ error: "Password Cannot be empty"});
    }

    res.json({ mesaage: "Login succesfull" });
});