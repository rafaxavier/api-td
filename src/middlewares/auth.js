const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = function(req, res, next){
    const authHeader = req.headers.authorization;

    // verifica se no header contem authorization
    if(!authHeader){
        return res.status(401).send({msg: 'No token provided' });
    }

    // por padrao o token tem duas partes ex:' Bearer 6fsh45f46shfsd4sdfds6'
    // dividindo o token por espaço, ou seja duas partes
    const parts = authHeader.split(' ');
    if(parts.length !== 2){
        return res.status(401).send({msg: 'Token error'});
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({msg: 'Token malformatted'});
    }        

    // validando o token
    jwt.verify(token, authConfig.secret, (err, decoded )=>{
        if(err){
            return res.status(401).send({msg: 'Token invalid'});
        }

        // decodificando o token para obter o id do user e repassando-o para o req
        req.userId = decoded.id;
    })
    
    return next()
}