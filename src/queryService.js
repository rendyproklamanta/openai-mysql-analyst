const db = require('./db');

// Fungsi untuk mengambil struktur database
async function getDatabaseStructure() {
    const query = `
        SELECT 
            c.TABLE_NAME AS TableName, 
            c.COLUMN_NAME AS ColumnName, 
            c.COLUMN_TYPE AS Type, 
            c.IS_NULLABLE AS Nullable, 
            c.COLUMN_DEFAULT AS DefaultValue, 
            c.COLUMN_KEY AS KeyType, 
            c.EXTRA AS Extra
        FROM INFORMATION_SCHEMA.COLUMNS c
        WHERE c.TABLE_SCHEMA = ?
        ORDER BY c.TABLE_NAME, c.ORDINAL_POSITION;
    `;

    const [rows] = await db.query(query, [process.env.DB_DATABASE]);
    
    // Format data berdasarkan tabel
    let structuredData = {};
    rows.forEach(row => {
        if (!structuredData[row.TableName]) {
            structuredData[row.TableName] = [];
        }
        structuredData[row.TableName].push(row);
    });

    return structuredData;
}

module.exports = { getDatabaseStructure };
