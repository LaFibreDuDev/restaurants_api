import vine from '@vinejs/vine'
import { defineValidator } from '#validators/core'

const properties = {
  name: vine.string().minLength(3).maxLength(255),
  rate: vine.number().min(0).max(5),
  type: vine.string().minLength(3).maxLength(255),
}

export const RestaurantValidator = defineValidator(properties)
