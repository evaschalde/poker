import express, { Application } from 'express';
import playersRouter from './routes/players.route';

const app: Application = express();

// Routes
app.use('/api/players', playersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
