const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      status: {
        type: DataTypes.ENUM(Alive - Dead - unknown),
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      origin: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM(Female - Male - Genderless - unknown),
      },
      location: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
