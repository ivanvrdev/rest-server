const {getRole} = require('../helpers/roles.helpers');

const canCreate = async(req, res, next) =>{
    const token = req.headers['token'];
    const role = await getRole(token);
    if (!(role == 'admin' || role == 'colaborator')) {
        res.json({msg: 'Access denied'})
        return;
    }
    next();
}

const canEdit = async(req, res, next) =>{
    const token = req.headers['token'];
    const role = await getRole(token);
    if (!(role == 'admin')) {
        res.json({msg: 'Access denied'})
        return;
    }
    next();
}

module.exports = {canCreate, canEdit};
