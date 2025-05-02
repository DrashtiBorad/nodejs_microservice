const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, "microservice_jwt");
    req.user = decoded;
    next();
  } catch (err) {
    console.log("Error in verifyToken", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
