const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.post('/', todoController.createToDo);
router.get('/', todoController.getTodos);

module.exports = router;