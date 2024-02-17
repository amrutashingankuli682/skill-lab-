// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const validationMiddleware = require('../middleware/validationMiddleware');
const router1 = express.Router();
router.post('/login', validationMiddleware, authController.login);
router.post('/register', validationMiddleware, authController.register);
module.exports = router1;
// routes/blogRoutes.js
const express = require('express');
const blogController = require('../controllers/blogController');
const validationMiddleware = require('../middleware/validationMiddleware');
const router2 = express.Router();
router.get('/', blogController.getAllBlogs);
router.post('/', validationMiddleware, blogController.createBlog);
router.get('/:authorId', validationMiddleware, blogController.getBlogByAuthorId);
module.exports = router2;
