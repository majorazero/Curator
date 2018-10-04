/**
 * User Model
 */

// Export user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(40),
            allowNull: false
        }
    });
    return User;
};
