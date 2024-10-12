// src/middlewares/notFoundMiddleware.js
const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    message: "Route not found",
    status: 404,
  });
};

module.exports = notFoundMiddleware;
