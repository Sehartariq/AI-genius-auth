// Mock AI endpoints

// GET /api/ai/free-model - Accessible by ALL logged in users
const freeModel = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Free AI Model: Basic text generation',
        user: {
            id: req.user.id,
            email: req.user.email,
            role: req.user.role
        },
        model: 'free-gpt-v1',
        credits_remaining: 100
    });
};

// POST /api/ai/premium-model - Only Premium_User and Admin
const premiumModel = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Premium AI Model: Advanced text & image generation',
        user: {
            id: req.user.id,
            email: req.user.email,
            role: req.user.role
        },
        model: 'premium-gpt-4-vision',
        credits_used: 10,
        credits_remaining: 990
    });
};

// DELETE /api/ai/purge-cache - ONLY Admin
const purgeCache = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Cache purged successfully',
        user: {
            id: req.user.id,
            email: req.user.email,
            role: req.user.role
        },
        action: 'ADMIN_ACTION',
        timestamp: new Date().toISOString(),
        cache_cleared: ['ai_models', 'user_sessions', 'temp_data']
    });
};

module.exports = { freeModel, premiumModel, purgeCache };