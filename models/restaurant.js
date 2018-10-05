/**
 * Restaurant Model
 */

// Export restaurant model
module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define("Restaurant", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                is: /^[a-z]{2,20}(\s[a-z]{2,20}){0,4}$/i
            }
        },
        imageLink: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                is: /^[a-z]{2,20}(\s[a-z]{2,20}){0,4}$/i
            }
        },
        yelpId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Restaurant;
};
