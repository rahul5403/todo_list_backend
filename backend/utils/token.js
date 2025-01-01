import jwt from "jsonwebtoken";

export const gtsc = (userid, res) => {
  try {
    const token = jwt.sign({ userid }, process.env.SECRET, { expiresIn: "7d" });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict", // Protect against CSRF attacks
    });
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Token generation failed");
  }
};
