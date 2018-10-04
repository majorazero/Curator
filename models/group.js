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
    return Group;
};
