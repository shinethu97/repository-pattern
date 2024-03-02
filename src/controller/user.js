import userDB from '../models/user'
import UserRepository from '../repositories/user'
import UserValidation from '../validation/user'

export const all = async (req, res, next) => {
  try {
    const user = await UserRepository.all()
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export const get = async (req, res, next) => {
  try {
    /** Validation */
    const error = UserValidation.getById({ user_id: req.params.id })

    if (error) return next(error)

    const user = await UserRepository.getById(req.params.id)

    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export const add = async (req, res, next) => {
  try {
    /** validation */
    const error = UserValidation.add(req.body)
    if (error) return next(error)

    /** Get By Id */
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
  try {
    /** Validate */
    const error = UserValidation.getById({ user_id: req.params.id })
    if (error) return next(error)

    /** Delete By Id */
    const user = await UserRepository.drop(req.params.id)
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}
