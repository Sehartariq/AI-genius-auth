require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mockDB = require('./config/mockDb');

// Import routes
const authRoutes = require('./routes/auth');
const aiRoutes = require('./routes/ai');

const app = express();

// Initialize mock database (hashes passwords)
mockDB.initializeMockDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'AI-Genius API is running',
        endpoints: {
            auth: '/api/auth/login, /api/auth/refresh, /api/auth/logout',
            ai: '/api/ai/free-model, /api/ai/premium-model, /api/ai/purge-cache'
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// 404 handler 
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Cannot find ${req.originalUrl} on this server`
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📦 Using MOCK DATABASE (as required by assignment)\n`);
    console.log(`📋 Available endpoints:`);
    console.log(`   POST   /api/auth/login`);
    console.log(`   POST   /api/auth/refresh`);
    console.log(`   POST   /api/auth/logout`);
    console.log(`   GET    /api/ai/free-model`);
    console.log(`   POST   /api/ai/premium-model`);
    console.log(`   DELETE /api/ai/purge-cache\n`);
});