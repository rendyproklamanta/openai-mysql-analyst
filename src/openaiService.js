require('dotenv').config();
const { OpenAI } = require('openai');

// Inisialisasi OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Fungsi untuk mendapatkan respons dari OpenAI
async function getOpenAIExplanation(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }]
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error calling OpenAI:", error);
        return "Error fetching description.";
    }
}

module.exports = { getOpenAIExplanation };
