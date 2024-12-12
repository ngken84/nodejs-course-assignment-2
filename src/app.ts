import express, { Request, Response } from 'express';
import path from 'path';

import userRouter from './routes/user';
import rootDir from './util/path';

const app = express();

app.use(userRouter);

app.get('/', (req: Request, res: Response, next: () => void) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

app.listen(3000);