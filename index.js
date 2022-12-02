let express = require("express")

let app = express()

app.listen(3000, () => {
    console.log("Server is Connected...")
})

let connectdb = require("./connection/connectdb.js")
connectdb()

let saveDoc = require("./model/model.js")
saveDoc()


