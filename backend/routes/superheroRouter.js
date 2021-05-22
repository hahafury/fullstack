const {Router} = require('express');
const superheroRouter = router();
superheroRouter
    .route('/')
    .post(superheroController.create)
    .get(superheroController.getMany);
superheroRouter
    .route('/:superheroId')
    .get(superheroController.getById)
    .put(superheroController.create)
    .delete(superheroController.deleteById);
module.exports = superheroRouter;