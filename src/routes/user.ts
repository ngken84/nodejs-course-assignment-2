import express, { Request, Response } from 'express';
import path from 'path';

import rootDir from '../util/path';

const router = express.Router();

router.get('/users', (req : Request, res : Response, next: () => void) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

export default router;