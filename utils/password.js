const { verify } = require('argon2');

const ValidatePassword = async (storedPassword, providedPassword) => {
  return await verify(storedPassword, providedPassword);
};

module.exports = {
  ValidatePassword,
};
