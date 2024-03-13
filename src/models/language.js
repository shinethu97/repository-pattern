import mongoose from 'mongoose'

const { Schema } = mongoose

const languageSchema = new Schema({
  name: { type: String, required: true, unique: true },
})

const language = mongoose.model('language', languageSchema)

export default language
