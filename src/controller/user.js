import userDB from '../models/user'
import UserRepository from '../repositories/user'
import UserValidation from '../validation/user'

export const all = async (req, res, next) => {
  const user = await UserRepository.all()
  res.status(200).json(user)
}

export const get = async (req, res, next) => {
  const user = await UserRepository.getById(req.params.id)
  res.status(200).json(user)
}

export const add = async (req, res, next) => {
  try {
    /** validation */
    const error = UserValidation.add(req.body)

    if (error) return next(error)

    const result = await UserRepository.add(req.body)

    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}

export const update = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      user_id: req.params.id,
    }
    /** validation */
    const error = UserValidation.update(data)
    if (error) return next(error)

    /** update */
    const result = await UserRepository.update(data)
    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}

export const drop = async (req, res, next) => {
  const user = await userDB.findById(req.params.id)
  if (!user) {
    console.log('Your Delete id does not exist')
    return
  }
  await userDB.findByIdAndDelete(req.params.id)
  res.status(200).json({ msg: 'Delete Success' })
}
