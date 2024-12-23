import jwt from 'jsonwebtoken';


const generateToken = (user) => {
  const payload = {
    id : user._id,
    name : user.name
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : '30m'});

  return token
};

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if(!token){
    return res.status(401).send('acces denied no toke provided')
  };

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;
  } catch (err) {
    res.status(400).send('invalid token')
  }
};

export {
  generateToken,
  verifyToken
}