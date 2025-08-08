// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const Review = require("./review.js")

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     image: {
//         filename: {
//             type: String,
//             default: "listingimage",
//             set: (v) =>
//                 v===""
//                     ? "listingimage"
//                     : v,
//         },
//         url: {
//             type: String,
//             default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9FZ-pj5hRqRK1L-KyfUJicBMGCOZktsu2w&s",
//             set: (v) =>
//                 v===""
//                     ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9FZ-pj5hRqRK1L-KyfUJicBMGCOZktsu2w&s"
//                     : v,
//         },
//     },
//     price: Number,
//     location: String,
//     country: String,
//     reviews: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: "Review",
//         },
//     ],
//     owner: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     },
// });

// listingSchema.post("findOneAndDelete", async(listing) => {
//     if(listing) {
//         await Review.deleteMany({ _id: { $in: listing.reviews } });
//     }
// })

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage",
            set: (v) =>
                v === "" ? "listingimage" : v,
        },
        url: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9FZ-pj5hRqRK1L-KyfUJicBMGCOZktsu2w&s",
            set: (v) =>
                v === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9FZ-pj5hRqRK1L-KyfUJicBMGCOZktsu2w&s" : v,
        },
    },
    price: Number,
    location: String,
    country: String,

    geometry: {
    type: {
        type: String,
        enum: ["Point"],
        default: "Point"
    },
    coordinates: {
        type: [Number],
        default: [77.2090, 28.6139]
    }
},

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
