const express = require('express');
const connectDB = require('./config/dbConnection');
// const errorHandler = require('./middleware/errorHandler');
const {filterProject} = require("./controllers/projectController");
const fs = require('fs');
const cors = require('cors');
require("dotenv").config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
// app.use(errorHandler);

app.use("/api/projects", require("./routes/projectRoutes"));

app.post('/filter', filterProject);

// DB connection
const port = process.env.PORT || 3001;
app.listen(port,()=>{
console.log(`App is listening on port ${port}`);
});
