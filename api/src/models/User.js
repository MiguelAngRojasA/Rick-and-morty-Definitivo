const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      // id: {
      //     type: DataTypes.UUID,
      //     defaultValue: DataTypes.UUIDV4,
      //     primaryKey:true,
      //     allowNull: false,
      // }

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(32),
        allowNull: false,
        // validate:{
        //     is:/^[0-9a-f]{64}$/i
        // }
      },
    },
    { timestamps: false }
  );
};

//uuid ES ALGUN TIPO DE FORMATO DE TIPO DE DATO
