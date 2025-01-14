import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import topic from './topic.route'
import subtopics from './subTopic'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/topics', topic);
  router.use('/subtopics', subtopics);
  return router;
};

export default routes;
