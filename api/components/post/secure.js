const auth = require("../../../auth");

module.exports = checkAuth = (action) => {
  const middleware = (req, res, next) => {
    switch (action) {
      case "own":
        auth.check.logged(req);
        next();
        break;
      default:
        next();
    }
  };

  return middleware;
};
