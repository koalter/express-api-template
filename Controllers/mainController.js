const express = require('express');

const mainService = require('../Services/mainService');
const router = express.Router();

router.get('/', (request, response) => {
    const result = mainService.getAll();
    response.json(result.response);
});

router.get('/:id', (request, response) => {
    const result = mainService.get(request.params.id);
    response.json(result.response);
});

router.post('/', (request, response) => {
    const result = mainService.add(request.body.title, request.body.description);
    response.status(result.status).json(result.response);
});

router.put('/:id', (request, response) => {
    const result = mainService.update(request.params.id, request.body.title, request.body.description);
    response.json(result.response);
});

router.delete('/:id', (request, response) => {
    const result = mainService.delete(request.params.id);
    response.json(result.response);
});

module.exports = router;