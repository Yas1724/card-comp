import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: String,
  bio: String,
  interests: [String],
  socials: {
    twitter: String,
    github: String,
    linkedin: String
  },
  imageUrl: String,
  createdBy: String
});

export default mongoose.model("Card", cardSchema);
