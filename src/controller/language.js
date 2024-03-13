import { ERR } from '../constants/error'
import LanguageRespository from '../repositories/language'
import { CustomError } from '../util'
import LanguageValidation from '../validation/language'

export const add = async (req, res, next) => {
  try {
    const error = LanguageValidation.addValidate(req.body)
    if (error) throw new CustomError(ERR.VALIDATION, 400, error)

    const result = await LanguageRespository.add(req.body)
    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}
