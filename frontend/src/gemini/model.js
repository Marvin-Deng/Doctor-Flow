import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

function generateSummaryPrompt(medication_name, condition) {
  return `Briefly describe the purpose of ${medication_name} and its use in treating ${condition}. Describe the side effects and what kinds of individuals are at risk taking this medication.`;
}

function generateDRPPrompt(medication_name, condition) {
  return `Briefly describe the purpose of ${medication_name} and its use in treating ${condition}. Describe the side effects and what kinds of individuals are at risk taking this medication.`;
}

async function runGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.error("Error during AI content generation:", error);
  }
}

runGemini(generateSummaryPrompt("Metformin", "Type 2 Diabetes"));
