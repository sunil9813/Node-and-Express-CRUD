import express from "express"
import bodyParser from "body-parser"

import userRoutes from "./src/routes/user.js"

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use("/users", userRoutes)

app.get("/", (req, res) => {
  res.send("hello from home page")
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
