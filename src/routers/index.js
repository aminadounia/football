import route1  from './route1.js'
import express from 'express';
const router=express.Router;
router.use('/route1',route1);

export default router;

