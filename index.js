const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => { res.header("Content-Type",'application/json');
    res.send(
        {
            requisicao: "SUCESSO"
        }
    );
})

app.post("/test", (req, res) => {
    res.header("Content-Type",'application/json');
    res.send("OK");
    console.log(responseToken)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})