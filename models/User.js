const mockDB = require('../config/mockDb');

// Mock User Model 
class User {
    static async findOne(query) {
        if (query.email) {
            const user = await mockDB.findUserByEmail(query.email);
            if (user) {
                return {
                    _id: user.id,
                    id: user.id,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                    comparePassword: async (candidatePassword) => {
                        return await mockDB.comparePassword(candidatePassword, user.password);
                    }
                };
            }
        }
        return null;
    }

    static async findById(id) {
        const user = await mockDB.findUserById(id);
        if (user) {
            return {
                _id: user.id,
                id: user.id,
                email: user.email,
                password: user.password,
                role: user.role,
                comparePassword: async (candidatePassword) => {
                    return await mockDB.comparePassword(candidatePassword, user.password);
                }
            };
        }
        return null;
    }
}

module.exports = User;