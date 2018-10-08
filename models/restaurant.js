/**
 * Restaurant Model
 */

// Export restaurant model
module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define("Restaurant", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
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
            allowNull: false
        },
        yelpId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
          type: DataTypes.STRING,
          allowNull: false
        }
    });
    return Restaurant;
};
