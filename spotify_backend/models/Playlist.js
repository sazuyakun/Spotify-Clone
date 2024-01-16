import mongoose from "mongoose";

//creating a mongoose schema
const Playlist = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    track:{
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    songs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "song"
        }
    ],
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    ]
});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;