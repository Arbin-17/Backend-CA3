const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { email: "bob@gmail.com", password: "1234" },
  { email: "alice@gmail.com", password: "001122" },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email cannot be empty" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password cannot be empty" });
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
