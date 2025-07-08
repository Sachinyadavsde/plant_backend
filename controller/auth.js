function Signup(req, res) {
  try {
    console.log("");
    return res.json({
      message: "Your account has been created",
      code: 200,
      data: {},
    });
  } catch (error) {
    return res.json({ code: 500, message: "Something went wrong" });
  }
}

module.exports = { Signup };
