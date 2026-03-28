import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    match: Number,
    missingSkills: [String],
    suggestions: [String],
    keywords: [String]
  },
  { timestamps: true }
);

export default mongoose.model("Analysis", analysisSchema);