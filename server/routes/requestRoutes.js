const express = require('express');
const router = express.Router();
const controller = require('../controllers/requestController');

router.get('/', controller.getRequests);
router.get("/:id", controller.getSingleRequest);
router.post('/', controller.createRequest);
router.put('/:id', controller.updateStatus);
router.delete('/:id', controller.deleteRequest);

module.exports = router;