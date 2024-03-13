/** model */
import userDB from '../models/user'

/** common */
import Abstract from './base'
import { MSG } from '../constants/message'

class UserRepository extends Abstract {
  static async all() {
    const users = await userDB.find()
    return { users }
  }

  static async getById(id) {
    const user = await userDB.findById(id)

    // if (!user) throw createError(404, "User Not Found!")
    // if (!user) throw new CustomError("User Not Found", 404, null)
    if (!user) super.throwCustomError(null, MSG.USER_NOT_FOUND, 404)

    return { user }
  }

  static async add(params) {
    const payload = this.generatePayload(params)
    const user = await userDB.create(payload)
    return { user }
  }

  static async update(params) {
    const payload = this.generatePayload(params)
    const user = await userDB.updateOne(payload, { _id: params.user_id })

    return { user }
  }

  static async drop(params) {
    await userDB.findByIdAndDelete(params)
    return
  }
  /**
   ------------------- Functions -------------------
   -------------------------------------------------
   */
  static async generatePayload(params) {
    return {
      name: params.name,
      email: params.email,
      password: params.password,
    }
  }
  static async generateUpdatePayload(params) {
    const p = {
      name: params.name,
      email: params.email,
      password: params.password,
    }

    return p
  }
}

export default UserRepository
