// const secret = process.env.REACT_APP_SECRET;
// const jwt = require('jsonwebtoken');

const sessionCheckError = (token) => {
  // if (token) {
  //   return jwt.verify(token, secret, (err, decoded) => {
  //     if (err) {
  //       return {
  //         status: false,
  //       };
  //     }
  //     return {
  //       status: true,
  //       id: decoded.id,
  //     };
  //   });
  // }

  return {
    status: !!token,
  };
};

export default sessionCheckError;
