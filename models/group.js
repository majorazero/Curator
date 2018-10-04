/**
 * Group Model
 */

// Export group model
module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define("Group", {
       name: {
           type: DataTypes.STRING(50),
           allowNull: false
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
