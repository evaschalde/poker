import express, { Request, Response } from 'express';
import { PlayersService } from '../services/players.service';
// eslint-disable-next-line new-cap
const router = express.Router();
const playersService = new PlayersService();

// Route to list all players
router.get('/', (req: Request, res: Response) => {
  res.json(playersService.getAllPlayers());
});

export default router;
