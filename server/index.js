const express = require('express');
const cors = require('cors');
const Datastore = require('nedb-promises');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const db = Datastore.create({
    filename: path.join(__dirname, 'data', 'visitors.db'),
    autoload: true
});

// Routes
app.get('/api/visitors', async (req, res) => {
    try {
        const count = await db.count({});
        res.json({ count });
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/visitors/increment', async (req, res) => {
    try {
        const { systemId } = req.body;

        if (!systemId) {
            return res.status(400).json({ error: 'systemId is required' });
        }

        // Check if this systemId has already visited
        const existingVisitor = await db.findOne({ systemId });

        if (!existingVisitor) {
            await db.insert({ systemId, timestamp: new Date() });
            const newCount = await db.count({});
            return res.json({ count: newCount, incremented: true });
        }

        const count = await db.count({});
        res.json({ count, incremented: false });
    } catch (error) {
        console.error('Error incrementing visitor count:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Simple health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Visitor tracker backend running on port ${PORT}`);
});
