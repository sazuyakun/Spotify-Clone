import mongoose from "mongoose";

//creating a mongoose schema
const User = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    likedSongs:{
        //change this to array
        type: String,
        default: "",
    },
    likedPlaylists:{
        //change this to array
        type: String,
        default: "",
    },
    subscribedArtists: {
        //change this to array
        type: String,
        default: "",
    }
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;