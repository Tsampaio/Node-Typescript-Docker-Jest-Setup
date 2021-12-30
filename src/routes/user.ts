import express from 'express';
import getUsers from '../controllers/user';

const router = express.Router();

// router.post('/uploadCourseImage', pagesController.uploadCourseImage);
router.get('/user', getUsers);

export { router as userRouter };
