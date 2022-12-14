require("dotenv").config();
const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(process.env.LINK_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB is connecting..!!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect };
