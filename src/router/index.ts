import express, { Router } from 'express';
import { sampleHeathCheck, getAllBooks } from '../controllers';

const router = express.Router();

router.get('/ping', sampleHeathCheck);
router.get('/books', getAllBooks);

export = router;
