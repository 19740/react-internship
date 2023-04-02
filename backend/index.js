import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "task_db"
})



app.get("/", (req, res) => {
    res.json("WITAJ!")
})

app.get("/rams", (req,res)=>{
    const q = "Select ram.id, ram.brand, ram.model, ram.clock_speed, ram.size, ram.CAS_latency, ram.ECC_status, ram.price, ram.id_type, type.name from ram JOIN type ON ram.id_type = type.id"
    db.query(q, (err, data) => {
        if(err) {
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
})
app.get("/types", (req,res)=>{
  const q = "Select * from type"
  db.query(q, (err, data) => {
      if(err) {
          return res.json(err)
      } else {
          return res.json(data)
      }
  })
})


  app.put("/rams/:id", (req, res) => {
    const ramId = req.params.id;
    const q = "UPDATE ram SET `brand` = ?, `model` = ?, `clock_speed` = ?, `size` = ?, `CAS_latency` = ?, `ECC_status` = ?, `price` = ?, `id_type` = ? WHERE id = ?";
  
    const values = [
      req.body.brand,
      req.body.model,
      req.body.clock_speed,
      req.body.size,
      req.body.CAS_latency,
      req.body.ECC_status,
      req.body.price,
      req.body.id_type
    ];
  
    db.query(q, [...values,ramId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(8000, () =>{
    console.log("Connect to backend!")
})