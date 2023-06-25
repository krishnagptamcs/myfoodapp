exports.UserProfile = async (req, res, next) => {
  try {
    res.status(200).json({
        success:true,
      user: req.user
    })
    
  } catch (error) {
    console.log(error);
  }
};
