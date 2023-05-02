const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const NotFound = require('../errors/NotFoundError');

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

router.use((req, res, next) => {
  next(new NotFound('Страница не существует'));
});

module.exports = router;
