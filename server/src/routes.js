const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenControllers')
const BlogController = require('./controllers/BlogController')
const CommentController = require('./controllers/CommentController')

module.exports = (app) => {
  /* RESFUL Api for users management */
  // create user
  app.post('/user',
    UserController.create
  )

  app.put('/user/:userId',
    UserController.put
  )

  app.delete('/user/:userId',
    UserController.remove
  )

  app.get('/user/:userId',
    UserController.show
  )

  app.get('/users',
    isAuthenController,
    UserController.index    
  )

  app.post('/login',
    UserAuthenController.login
  )
  
  app.post('/blog',
  BlogController.create
  )

  app.put('/blog/:blogId',
  BlogController.put
  )

  app.delete('/blog/:blogId',
  BlogController.remove
  )

  app.get('/blog/:blogId',
  BlogController.show
  )

  app.get('/blogs',
  BlogController.index
  )

// comment router
    //create comment
    app.post('/comment',
    CommentController.create
  )

  // edit comment, suspend, active
  app.put('/comment/:commentId',
    CommentController.put
  )

  // delete comment
  app.delete('/comment/:commentId',
    CommentController.remove
  )

  // get comment by id
  app.get('/comment/:commentId',
    CommentController.show
  )

  // get all comment
  app.get('/comments',
    CommentController.index
  )

}