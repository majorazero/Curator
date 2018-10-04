/**
 * Rating Model
 */

//  Export rating model
module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define("Rating", {
        rating: {
            type: DataTypes.INTEGER(2),
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
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
