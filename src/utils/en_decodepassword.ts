var bcrypt = require("bcryptjs");
export const fn_encode = (password:any) => {
  var salt = bcrypt.genSaltSync(10);
  console.log(bcrypt.hashSync(password, salt));
  return bcrypt.hashSync(password, salt);
};
export const fn_checkcode = (password, encode):any => {
  return bcrypt.compareSync(password, encode);
};
