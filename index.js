import express, { response } from "express";

const app = express()
app.use(express.json())

const people = []

app.get("/", (req, res) => {
    res.json({
        ok: true,
        data: people
    })
});


app.post("/create", (req, res) => {
    const data = req.body
    data.id = people.length+1;
    people.push(data)
    
    return res.status(201).json({
        ok: true,
        data: "Persona creada"
    })
})

app.put("/editar:id", (req, res) => {
    let ident = req.params.id
    
    return res.status(201).json({
        ok: true,
        data: "Persona creada"
    })
})

app.delete("/eliminar", (req, res) => {
    people.push(req.body)
    
    return res.status(201).json({
        ok: true,
        data: "Persona creada"
    })
})

app.listen(6004, () => 
console.log("El servidor se inció en el servidor http://localhost:6004"));