const mongoose = require("mongoose");
const PostSchema = require("./schemas/board");
exports.Post = mongoose.model("Post", PostSchema);
