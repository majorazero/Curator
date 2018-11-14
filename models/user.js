/**
 * User Model
 */

// Export user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                is: /(?=[a-z1-9]{2,30})(?!.*[^a-z1-9]+)(?=.*[^\s])/i
            }
        },
        password: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        token: {
          type: DataTypes.STRING(100)
        }
    });
    return User;
};
