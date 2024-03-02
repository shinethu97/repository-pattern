import userDB from '../models/user'

class UserRepository {
  static async all() {
    const users = await userDB.find()
    return { users }
  }

  static async getById(id) {
    const user = await userDB.findById(id)
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
