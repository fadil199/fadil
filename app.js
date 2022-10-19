const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: "hello world"
    })
})

app.listen(PORT, () => console.log('listening on port', PORT));