const jwt = require("jsonwebtoken");
// Middleware function to validate JWT tokens

function validateToken(req, res, next) {
  let token = req.headers.authorization;
  token = token.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(token, "hamza123@5430---121[]23812213hdsd", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token" });
    }
    // If the token is valid, save the decoded information for later use
    req.user = decoded;
    next();
  });
}

function requireRoles(roles) {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (roles.includes(userRole)) {
      // User has one of the required roles, so allow access

      next();
    } else {
      // User does not have any of the required roles, so send a forbidden response

      res.status(403).json({ message: "Permission denied" });
    }
  };
}

module.exports = {
  validateToken,
  requireRoles,
};