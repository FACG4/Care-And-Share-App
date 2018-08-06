// const secret = process.env.REACT_APP_SECRET;
const jwt = require('jsonwebtoken');

const sessionCheckError = (token) => {
  if (token) {
    const decodedToken =  jwt.decode(token);
      return {
        status: true,
        id: decodedToken.id,
      };
  }
  return {
    status: false,
  };
};

export default sessionCheckError;
