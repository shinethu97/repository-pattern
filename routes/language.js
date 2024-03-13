import * as LanguageController from '../src/controller/language'
import express from 'express'

const router = express.Router()

router.post('/', LanguageController.add)

export default router
