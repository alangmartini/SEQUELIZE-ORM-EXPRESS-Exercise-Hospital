const { User } = require('../models');

const enter = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new Error('Invalid email or password');
  return user;
};

module.exports = { enter };
