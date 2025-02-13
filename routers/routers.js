const express = require('express')

const router = express.Router();

const { index, show, store, update, patch, destroy } = require('../controllers/postsController');

router.get('/', index);

router.get('/:id', show);

router.post('/', store);

router.put('/:id', update);

router.patch('/:id', patch);

router.delete('/:id', destroy);

module.exports = router;