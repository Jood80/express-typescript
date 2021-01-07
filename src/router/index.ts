import express, { Router } from 'express';
import { sampleHeathCheck, getAllBooks, postBook } from '../controllers';

const router = express.Router();

router.get('/ping', sampleHeathCheck);
router.get('/books', getAllBooks);
router.post('/createbook', postBook);

export = router;
