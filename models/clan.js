/**
 * Clan Model
 */

// Export clan model
module.exports = (sequelize, DataTypes) => {
    const Clan = sequelize.define("Clan", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        location: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        clanImage: {
            type: DataTypes.STRING,
            allowNull: true
        },
        blurb: {
          type: DataTypes.TEXT
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
    return Clan;
};
