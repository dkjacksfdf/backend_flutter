const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');
const jwt = require('../utils/jwt');


knl.post('login', async(req, res)=>{
    const schema = joi.object({
        email : joi.String().require(),
        password: joi.String().require()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.admin.findAll({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })

    knl.createException('0005','', knl.objects.isEmptyArray(result));

    const user  = knl.objects.copy(result[0]);
    delete user.password;
    delete user.updatedAT;
    delete user.createdAT;
    
    // response.json({
    //     token: jwt.signIn(user.id),
    //     user : user
    // });

}, securityConsts.USER_TYPE_PUBLIC);

