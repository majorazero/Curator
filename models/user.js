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
                is: /(?=[a-z1-9]{4,30})(?!.*[^a-z1-9]+)(?=.*[^\s])/i
            }
        },
        password: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                is: /(?=.*[a-z]{2,})(?=.*\d{2,})(?=.*.{4,40})/
            }
        }
    });
    return User;
};
