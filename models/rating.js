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
        Rating.belongTo(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        });
        Rating.belongTo(models.Group, {
            foreignKey: {
                name: "groupId",
                allowNull: false
            }
        });
        Rating.belongTo(models.Rating, {
            foreignKey: {
                name: "restaurantId",
                allowNull: false
            }
        });
    };
};
