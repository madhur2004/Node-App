const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ name: "agile-node-app" })
});


app.get("/student", (req, res) => {
  res.status(200).json([{
    name: "Madhur",
    Age: 21,
    College: "IIMT College of engineering "
  },
  {
    name: "Anmol ",
    Age: 21,
    College: "IIMT College of engineering "
    },
    {
      name: "Chetan",
      Age: 23,
      College: "IIMT College of engineering "
    },
    {
      name: "Deepak",
      Age: 22,
      College: "IIMT College of engineering "
    }
  ])
})

app.listen(3000);