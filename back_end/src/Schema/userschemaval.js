const Joi = require('joi');

const getprofile=Joi.object().keys({
    email:Joi.string().email().required()
});

const updateProfile=Joi.object().keys({
 email:Joi.string().email().required(),
 name:Joi.string().required(),
 phone:Joi.string().length(10).optional(),
 bio:Joi.string().optional(),
 password:Joi.string().allow(null).optional()
});

module.exports={
    getprofile,
    updateProfile
}
