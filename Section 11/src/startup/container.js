const { createContainer, asClass, asValue, asFunction } = require('awilix');
// config
const config = require('../config');
const app = require('.');
// services
const { HomeService, UserService, IdeaService, CommentService } = require('../services');
// controllers
const { HomeController, UserController, IdeaController, CommentController } = require('../controllers');
// routes
const { HomeRoute, UserRoute, IdeaRoute, CommentRoute } = require('../routes/index.route');
const Routes = require('../routes');
// models
const { User, Idea, Comment } = require('../models');
// repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');

const container = createContainer();
container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton()
    })
    .register({
        HomeRoute: asFunction(HomeRoute).singleton(),
        UserRoute: asFunction(UserRoute).singleton(),
        IdeaRoute: asFunction(IdeaRoute).singleton(),
        CommentRoute: asFunction(CommentRoute).singleton()
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });

module.exports = container;