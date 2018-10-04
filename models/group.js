/**
 * Group Model
 */

// Export group model
module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define("Group", {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        hasPermission: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });
    Group.associate = (models) => {
        Group.belongsToMany(models.User, {
            through: "Membership",
            as: "memberships",
            foreignKey: {
                name: "groupId",
                allowNull: false
            }
        });
        Group.belongsToMany(models.Restaurant, {
            through: "Membership",
            as: "ratings",
            foreignKey: {
                name: "groupId",
                allowNull: false
            }
        });
    };
};
