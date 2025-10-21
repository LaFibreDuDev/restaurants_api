import { RestaurantFactory } from '#database/factories/restaurant_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const restaurantsData = [
      { name: 'Le Délice Gourmand', rate: 4.7, type: 'Français' },
      { name: 'Sakura Sushi', rate: 4.5, type: 'Japonais' },
      { name: 'Pizza Bella', rate: 3.1, type: 'Italien' },
      { name: 'Spicy Tandoor', rate: 4.6, type: 'Indien' },
      { name: 'Le bouillon', rate: 1.3, type: 'Français' },
      { name: 'Burger Factory', rate: 4.3, type: 'Américain' },
    ]

    for (const restaurant of restaurantsData) {
      await RestaurantFactory.merge(restaurant).create()
    }
  }
}
