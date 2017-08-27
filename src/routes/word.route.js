import express from 'express';
import Wordfinder from '../controllers/wordfinderController';

const router = express.Router();
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

router.route('/:word')
    .get(Wordfinder.findword)

export default router;