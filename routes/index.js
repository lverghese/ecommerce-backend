const router = require('express').Router();
const apiRoutes = require('./api');
const catRoutes = require('./api/category-routes')
router.use('/api', apiRoutes);

router.use('/api/categories', catRoutes)

module.exports = router;