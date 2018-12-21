// generate the JWT
function generateToken(req){
    var token = jwt.sign({
      auth:  'magic',
      agent: req.headers['user-agent'],
      exp:   Math.floor(new Date().getTime()/1000) + 7*24*60*60 // Note: in seconds!
    }, secret);  // secret is defined in the environment variable JWT_SECRET
    return token;
}


// validate the token supplied in request header
function validate(req, res) {
    var token = req.headers.authorization;
    try {
      var decoded = jwt.verify(token, secret);
    } catch (e) {
      return authFail(res);
    }
    if(!decoded || decoded.auth !== 'magic') {
      return authFail(res);
    } else {
      return privado(res, token);
    }
  }
  