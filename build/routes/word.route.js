'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _wordfinderController = require('../controllers/wordfinderController');

var _wordfinderController2 = _interopRequireDefault(_wordfinderController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/**
 * @swagger
 * definition:
 *   WordFinder:
 *     properties:
 *       word:
 *         type: string
 */

/**
 * @swagger
 * /wordfinder/{word}:
 *   get:
 *     tags:
 *       - Words
 *     description: Find a dictionaly word provided that the input of random word
 *     produces:
 *       - application/json
 *       - text/html
 *     parameters:
 *       - name: word
 *         description: Random word
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return list of words
 *         schema:
 *           $ref: '#/definitions/WordFinder'
 */

router.route('/:word').get(_wordfinderController2.default.findword);

exports.default = router;