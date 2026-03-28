import axios from "axios";

const analyzeWithAI = async (resumeText, jobDescription) => {
  try {
    const shortResume = resumeText.slice(0, 3000);
    const shortJob = jobDescription.slice(0, 1000);

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "user",
            content: `
You are an expert ATS (Applicant Tracking System).

Analyze the resume against the job description.

Give a realistic match percentage (0-100).

IMPORTANT:
- Always return valid JSON
- Never return empty arrays
- If no missing skills, still suggest improvements
- Be strict and realistic

Return ONLY JSON:
{
  "match": number,
  "missingSkills": ["skill1", "skill2"],
  "suggestions": ["improve X", "add Y"],
  "keywords": ["keyword1", "keyword2"]
}

Resume:
${shortResume}

Job:
${shortJob}
`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const raw = response.data.choices[0].message.content;

    let result;
    try {
      result = JSON.parse(raw);
    } catch (err) {
      console.log("Invalid JSON from AI 👉", raw);
      throw new Error("AI returned invalid JSON");
    }

    return result;

  } catch (error) {
    console.error("AI ERROR 👉", error.response?.data || error.message);
    throw new Error("AI analysis failed");
  }
};

export default analyzeWithAI;