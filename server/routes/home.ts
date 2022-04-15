import { Response, Request } from 'express';
const router = require('express').Router();

router.get('/', (req: Request, res: Response) => {
    res.send('INSIDE homepage');
});

export default router;
