/**
 * Membership Model
 */

// Export membership model
module.exports = (sequelize, DataTypes) => {
    const Membership = sequelize.define("Membership", {
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isMember: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    Membership.associate = (models) => {
        Membership.belongsTo(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        });
        Membership.belongsTo(models.Group, {
            foreignKey: {
                name: "groupId",
                allowNull: false
            }
        });
    };
};
