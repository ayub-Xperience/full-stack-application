export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        message: `Access denied: Requires one of [${roles.join(", ")}]`,
      });
    }
    next();
  };
};
