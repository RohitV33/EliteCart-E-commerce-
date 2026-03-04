import jwt from "jsonwebtoken";

export const adminLogin = (req, res) => {
  const { password } = req.body;

  console.log("ADMIN ENV:", process.env.ADMIN_PASSWORD);
  console.log("PASSWORD FROM FRONTEND:", password);

  if (password.trim() !== process.env.ADMIN_PASSWORD.trim()) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};