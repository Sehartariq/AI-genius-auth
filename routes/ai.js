const express = require('express');
const { freeModel, premiumModel, purgeCache } = require('../controllers/aiController');
const { protect } = require('../middleware/auth');
const { restrictTo } = require('../middleware/rbac');
const router = express.Router();

// All AI routes require authentication
router.use(protect);

// GET /api/ai/free-model - ALL logged in users (Free, Premium, Admin)
router.get('/free-model', freeModel);

// POST /api/ai/premium-model - Only Premium_User and Admin
router.post('/premium-model', restrictTo('Premium_User', 'Admin'), premiumModel);

// DELETE /api/ai/purge-cache - Only Admin
router.delete('/purge-cache', restrictTo('Admin'), purgeCache);

module.exports = router;