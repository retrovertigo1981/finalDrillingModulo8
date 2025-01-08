const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

const CreateSignature = (payload) => {
  return sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const ValidateSignature = (req) => {
  const signature = req.cookies;

  if (signature.Bearer) {
    try {
      const payload = verify(signature.Bearer, process.env.JWT_SECRET, {
        algorithms: 'HS256',
      });
      req.user = payload;
      return true;
    } catch (error) {
      return false;
    }
  }
};

module.exports = {
  CreateSignature,
  ValidateSignature,
};
