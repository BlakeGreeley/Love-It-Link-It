const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/love-it-link-it", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Starting connection with Database"))
.catch((err) => console.log('Something went wrong while connecting', err));