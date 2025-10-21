/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const homeController = () => import('#controllers/home_controller')
const restaurantsController = () => import('#controllers/restaurants_controller')

router.get('/', [homeController, 'index'])

router
  .group(() => {
    router.get('/', [restaurantsController, 'list'])
    router.get('/:id', [restaurantsController, 'show'])
    router.post('/', [restaurantsController, 'create'])
    router.put('/:id', [restaurantsController, 'update'])
    router.delete('/:id', [restaurantsController, 'delete'])
  })
  .prefix('/restaurants')
