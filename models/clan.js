/**
 * Clan Model
 */

// Export clan model
module.exports = (sequelize, DataTypes) => {
    const Clan = sequelize.define("Clan", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                is: /^[a-z]{2,20}(\s[a-z]{2,20}){0,4}$/i
            }
        },
        location: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                is: /^[a-z]{2,20}(\s[a-z]{2,20}){0,4}$/i
            }
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
