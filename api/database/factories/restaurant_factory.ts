import factory from '@adonisjs/lucid/factories'
import Restaurant from '#models/restaurant'

export const RestaurantFactory = factory
  .define(Restaurant, async ({ faker }) => {
    return {
      name: faker.company.name(),
      rate: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
    }
  })
  .build()
