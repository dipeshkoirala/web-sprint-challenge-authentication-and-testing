const jwt=require("jsonwebtoken")

module.exports =restrict= (req, res, next) => {
  return async(req,res,next)=>{

const authorizeError={message:"token invalid"}
const authenticateError={message:"token required"}
try{

const token=req.cookies.token

if(!token){
  return res.status(401).json(authenticateError)
}
jwt.verify(token,process.env.JWT_SECRET||"wrong", (err,decoded)=>{
  if(err){
    return res.status(401).json(authorizeError)
  }
  req.token=decoded
  next();
})

  }catch(err){
next(err)
  }
  
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
    }
};
