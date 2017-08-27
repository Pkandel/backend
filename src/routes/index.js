import express from 'express';
import wordRoutes from './word.route';

const router = express.Router();

router.get('/ping', (req, res) => {
    return res.sendStatus(200);
});


//mount wordfinder routes at /wordfinder 
router.use('/wordfinder', wordRoutes);

export default router;