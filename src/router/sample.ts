import express, { Router } from 'express';
import { sampleHeathCheck } from '../controllers/sample';

const router = express.Router();

router.get('/ping', sampleHeathCheck);

export = router;
