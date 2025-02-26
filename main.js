const db = require('./src/db');
const { getDatabaseStructure } = require('./src/queryService');
const { getOpenAIExplanation } = require('./src/openaiService');

async function main() {
    try {
        console.log("📌 Fetching database structure...");
        const databaseStructure = await getDatabaseStructure();

        const prompt = `Buatkan query relasi sebanyak 50 dengan keterangan singkat berdasarkan data berikut:\n${JSON.stringify(databaseStructure, null, 2)}`;
        console.log("📌 Sending request to OpenAI...");

        const explanation = await getOpenAIExplanation(prompt);
        console.log("\n📌 OpenAI Explanation:\n", explanation);
    } catch (error) {
        console.error("❌ Error:", error);
    } finally {
        await db.end(); // Tutup koneksi database
        process.exit(0); // Keluar dari Node.js
    }
}

main();
