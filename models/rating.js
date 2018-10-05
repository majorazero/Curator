/**
 * Rating Model
 */

//  Export rating model
module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define("Rating", {
        rating: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                is: /(?=.*[a-z1-9\.\s'"-]{4,})(?!.*[^a-z1-9\.\s'"\-\!\?])/i
            }
        }
    });
    Rating.associate = (models) => {
        Rating.belongsTo(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        });
        Rating.belongsTo(models.Group, {
            foreignKey: {
                name: "groupId",
                allowNull: false
            }
        });
        Rating.belongsTo(models.Restaurant, {
            foreignKey: {
                name: "restaurantId",
                allowNull: false
            }
        });
    };
    return Rating;
};
