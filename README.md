# 🤖 AI Resume Analyzer

AI Resume Analyzer is a full-stack MERN application that allows users to upload their resume and compare it with a job description. The system analyzes the resume using AI, matches it with the job requirements, and provides a match percentage along with missing skills, ATS-friendly keywords, and improvement suggestions.

---

## 🚀 Features

- 📄 Upload Resume (PDF)
- 📝 Add Job Description
- 🤖 AI-based Resume Analysis
- 📊 Resume vs Job Description Match Percentage
- ❌ Identify missing skills based on job role
- 💡 Smart suggestions to improve resume
- 🏷️ ATS-friendly keyword recommendations
- 🔍 Extract and analyze resume content
- 🔐 Secure authentication system

---

## 🧠 How It Works

1. User uploads resume (PDF)
2. User enters job description
3. System extracts text from resume
4. AI compares resume with job description
5. Generates:
   - Match percentage
   - Missing skills
   - Suggested keywords (ATS optimized)
   - Improvement suggestions
6. Results are displayed in a clean UI

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**AI Integration**
- OpenAI / Groq API

**Other Tools**
- PDF Parser
- JWT Authentication

---

## 🌐 Live Demo

👉 https://resume-analyzer-ercs.onrender.com/

---

## ⚙️ Installation & Setup

### 1. Clone Repository

    git clone https://github.com/priyank-code/resume-analyzer.git
    cd resume-analyzer

---

### 2. Install Dependencies

#### Backend

    cd backend
    npm install

#### Frontend

    cd client
    npm install

---

### 3. Environment Variables

Create a `.env` file inside the **backend** folder and add:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    AI_API_KEY=your_openai_or_groq_api_key

---

### 4. Run the Application

#### Start Backend

    npm start

#### Start Frontend

    npm run dev

---

## 📂 Project Structure

    resume-analyzer/
    │
    ├── backend/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── utils/
    │   └── server.js
    │
    ├── client/
    │   ├── components/
    │   ├── pages/
    │   ├── features/
    |   ├── context/
    |   ├── services/
    │   └── App.js
    │
    └── README.md

---


## 🎯 Future Improvements

- 📊 Resume scoring system
- 📈 Advanced analytics dashboard
- 📄 Resume vs multiple job descriptions
- 🌍 Multi-language support

---

## 👨‍💻 Author

**Priyank Vaghani**  
MERN Stack Developer  

- GitHub: https://github.com/priyank-code  
- LinkedIn: https://linkedin.com/in/priyankvaghani

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
