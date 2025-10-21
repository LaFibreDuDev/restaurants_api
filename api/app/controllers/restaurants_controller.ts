import type { HttpContext } from '@adonisjs/core/http'
import Restaurant from '#models/restaurant'
import { RestaurantValidator } from '#validators/restaurant'

export default class RestaurantsController {
  public async list({ response }: HttpContext) {
    const restaurants = await Restaurant.all()
    return response.json(restaurants)
  }

  public async show({ params, response }: HttpContext) {
    const restaurant = await Restaurant.findOrFail(params.id)
    return response.json(restaurant)
  }

  public async create({ request, response }: HttpContext) {
    const payload = await request.validateUsing(RestaurantValidator)
    const restaurant = await Restaurant.create(payload)
    return response.status(201).json(restaurant)
  }

  public async update({ params, request, response }: HttpContext) {
    const restaurant = await Restaurant.findOrFail(params.id)
    const payload = await request.validateUsing(RestaurantValidator)
    restaurant.merge(payload)
    await restaurant.save()
    return response.json(restaurant)
  }

  public async delete({ params, response }: HttpContext) {
    const restaurant = await Restaurant.findOrFail(params.id)
    await restaurant.delete()
    return response.status(204).noContent()
  }
}
