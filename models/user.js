'use strict';
const { Model } = require('sequelize');
const argon2 = require('argon2');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    toJSON() {
      const user = this.dataValues;
      delete user.password;

      return user;
    }
    static associate(models) {
      this.belongsToMany(models.Bootcamp, {
        through: 'UserBootcamp',
        foreignKey: 'user_id',
        otherKey: 'bootcamp_id',
      });
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      hooks: {
        beforeSave: async (user, options) => {
          if (user.changed('password')) {
            user.password = await argon2.hash(user.password);
          }
        },
      },
      paranoid: true,
    }
  );
  return User;
};
