import express, {Request, Response} from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();

// Example data
const players = [
  {id: 1, name: 'Sebastián'},
  {id: 2, name: 'José'},
  {id: 3, name: 'Charlie'},
];

// Route to list all players
router.get('/', (req: Request, res: Response) => {
  res.json(players);
});

export default router;
