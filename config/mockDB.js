const bcrypt = require('bcryptjs');

// MOCK DATABASE
// Stores users with: id, email, password (hashed), role

const users = [
    {
        id: '1',
        email: 'admin@test.com',
        password: 'admin123',  // Will be hashed on initialization
        role: 'Admin'
    },
    {
        id: '2',
        email: 'premium@test.com',
        password: 'premium123', 
        role: 'Premium_User'
    },
    {
        id: '3',
        email: 'free@test.com',
        password: 'free123', 
        role: 'Free_User'
    }
];

// Helper functions
const findUserByEmail = async (email) => {
    const user = users.find(u => u.email === email);
    if (user) {
        return {
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.role
        };
    }
    return null;
};

const findUserById = async (id) => {
    const user = users.find(u => u.id === id);
    if (user) {
        return {
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.role
        };
    }
    return null;
};

const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

// Hash all passwords on startup
const initializeMockDB = async () => {
    for (let i = 0; i < users.length; i++) {
        if (!users[i].password.startsWith('$2a')) {
            users[i].password = await bcrypt.hash(users[i].password, 10);
        }
    }
    console.log('✅ Mock database initialized with 3 test users');
    console.log('   📧 admin@test.com (Admin)');
    console.log('   📧 premium@test.com (Premium_User)');
    console.log('   📧 free@test.com (Free_User)');
    console.log('   🔑 All passwords: admin123 / premium123 / free123\n');
};

module.exports = {
    users,
    findUserByEmail,
    findUserById,
    comparePassword,
    initializeMockDB
};