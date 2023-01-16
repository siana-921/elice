const mongoose = require("mongoose");
const { Post } = require("./models");
mongoose.connect("mongodb://localhost:27017/myapp");
