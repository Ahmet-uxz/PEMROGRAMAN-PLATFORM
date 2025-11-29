const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const bukuRoutes = require("./routes/buku");
app.use("/buku", bukuRoutes);

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});
