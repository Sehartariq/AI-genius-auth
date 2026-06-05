require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const connectDB = require('./config/mockDB');

const seedUsers = async () => {
    try {
        await connectDB();
        
        // Clear existing users
        await User.deleteMany({});
        
        // Create test users
        const users = [
            {
                email: 'admin@test.com',
                password: 'admin123',
                role: 'Admin'
            },
            {
                email: 'premium@test.com',
                password: 'premium123',
                role: 'Premium_User'
            },
            {
                email: 'free@test.com',
                password: 'free123',
                role: 'Free_User'
            }
        ];
        
        await User.create(users);
        console.log('✅ Test users created!');
        console.log('Admin: admin@test.com / admin123');
        console.log('Premium: premium@test.com / premium123');
        console.log('Free: free@test.com / free123');
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding:', error);
        process.exit(1);
    }
};

seedUsers();