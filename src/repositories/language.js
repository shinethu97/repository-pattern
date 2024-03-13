import { MSG } from '../constants/message'
import languageDB from '../models/language'
import Abstract from './base'

class LanguageRespository extends Abstract {
  static async add(params) {
    const language_ = await languageDB.findOne({ name: params.name })

    if (language_) super.throwCustomError(null, MSG.LANGUAGE_EXIST, 422)

    const payload = this.generatePayload(params)
    const Newlanguage = await languageDB.create(payload)
    return { language: Newlanguage }
  }
  static generatePayload(params) {
    return {
      name: params.name,
    }
  }
}

export default LanguageRespository
