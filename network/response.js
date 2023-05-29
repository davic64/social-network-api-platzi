exports.success = (res, message = "", status = 200) => {
  let statusCode = status;
  let statusMessage = message;

  res.status(statusCode).json({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};

exports.error = (res, message = "Internal server error", status = 500) => {
  let statusCode = status;
  let statusMessage = message;

  res.status(statusCode).json({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};
