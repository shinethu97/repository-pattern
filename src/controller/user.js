import userDB from '../models/user'

export const all = async (req, res, next) => {
  const user = await userDB.find()
  res.status(200).json(user)
}

export const get = async (req, res, next) => {
  const user = await userDB.findById(req.params.id)
  res.status(200).json(user)
}

export const add = async (req, res, next) => {
  const user = new userDB(req.body)
  const DBuser = await user.save()
  res.status(200).json(DBuser)
}

export const patch = async (req, res, next) => {
  const user = await userDB.findById(req.params.id)
  if (!user) {
    console.log('Your Id does not exist')
    return
  }
  await userDB.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json({ msg: 'Update Success' })
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
