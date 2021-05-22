const {Router} = require('express');
const router  = Router();
const superheroRouter = require('./routes/superheroRouter');
router.use('/superheroes', superheroRouter)

//router.use('/some_things');
module.exports = router;