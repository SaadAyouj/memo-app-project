import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

//routes for posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;