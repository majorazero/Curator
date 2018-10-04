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
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        yelpId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Restaurant.associate = (models) => {
        Restaurant.belongsToMany(models.User, {
            through: "Membership",
            as: "memberships",
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        });
        Restaurant.belongsToMany(models.Group, {
            through: "Membership",
            as: "ratings",
            foreignKey: {
                name: "groupId",
                allowNull: false
            }
        });
    };
};
