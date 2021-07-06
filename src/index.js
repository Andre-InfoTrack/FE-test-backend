import express from 'express';
import seoRouter from './routes/seo';

const api = express();

// Add main routes to API
api.use('/seo', seoRouter);

export default api;
