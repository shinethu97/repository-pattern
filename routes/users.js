import express from 'express'
import * as userController from '../src/controller/user'
var router = express.Router()

/* GET users listing. */
router.get('/:id', userController.get)
router.get('/', userController.all)
router.post('/', userController.add)
router.patch('/:id', userController.update)
router.delete('/:id', userController.drop)

export default router
