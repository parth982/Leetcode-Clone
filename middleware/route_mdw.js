const {StatusCodes} = require('http-status-codes');

const route_not_found = (req,res)=>{
    res.status(StatusCodes.NOT_FOUND).send('Route Does Not Exist');
};

module.exports = route_not_found;

