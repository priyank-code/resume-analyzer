import extractText from "../utils/pdf.js";
import analyzeWithAI from "../utils/ai.js";
import Analysis from "../models/Analysis.js";

export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const { jobDescription } = req.body;

    const resumeText = await extractText(req.file.buffer);

    const aiResult = await analyzeWithAI(resumeText, jobDescription);

    const saved = await Analysis.create({
      user: req.user.id,
      ...aiResult,
    });

    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHistory = async (req, res) => {
  const history = await Analysis.find({ user: req.user.id }).sort({
    createdAt: -1,
  });

  res.json(history);
};
