import { Router } from 'express';
import { getSeoResults } from '../controllers/seo';

const seoRouter = Router();

// Define SEO routes
seoRouter.get('/results', getSeoResults);

export default seoRouter;
