const jwt = require('jsonwebtoken');


module.exports = function(req, res, next){
    //Get the token
    const token = req.header('x-access-token');

    //check if not token
    if(!token){
        return res.status(401).json({data: "authorization declined"});
    }

    //verify token
    try {
        const decoded = jwt.verify(token, "get_out");
        req.user = decoded;

        next();
    } catch (err) {
        res.status(401).json({msg: 'authorization declined by server'});  
    }
}