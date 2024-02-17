// middleware/authenticationMiddleware.js
const authenticationMiddleware = (req, res, next) => {
    // Authentication logic here
    next();
};
module.exports = authenticationMiddleware;
// middleware/validationMiddleware.js
const validationMiddleware = (req, res, next) => {
    // Validation logic here
    next();
};
module.exports = validationMiddleware;

