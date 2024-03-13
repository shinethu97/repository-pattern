import Joi from 'joi'
import Abstract from '../repositories/base'
import { MSG } from '../constants/message'

class LanguageValidation extends Abstract {
  static addValidate(payload) {
    const addSchema = new Joi.object({
      name: Joi.string().required(),
    })

    const { error } = addSchema.validate(payload)

    if (error) return Array.from(error.details, (r) => r.message)

    return
  }
}

export default LanguageValidation
