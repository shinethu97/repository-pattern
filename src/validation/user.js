import Joi from 'joi'

class UserValidation {
  static add(params) {
    const schema = new Joi.object({
      name: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    })
    const { error } = schema.validate(params)

    if (error) return Array.from(error.details, (r) => r.message)

    return
  }

  /**
   * update user
   * @param {Object} params
   * @returns
   */
  static update(params) {
    const schema = new Joi.object({
      user_id: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
      name: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    })
    const { error, ...v } = schema.validate(params)
    console.log(v)
    if (error) return Array.from(error.details, (r) => r.message)

    return
  }
}

export default UserValidation
