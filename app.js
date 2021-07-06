import express from 'express';
import cors from 'cors';
import api from './src';
import * as config from './env/default/app-config.json';

const app = express();
const { port, basePath } = config.api;

// Configure cors
app.use(cors());

// Default route
app.use(basePath, api);

// Start API
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
