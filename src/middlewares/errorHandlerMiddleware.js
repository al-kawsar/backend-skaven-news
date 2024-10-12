// src/middlewares/errorHandlerMiddleware.js
const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    status: statusCode,
  });
};

module.exports = errorHandlerMiddleware;
