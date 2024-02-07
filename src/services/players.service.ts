export class PlayersService {
  private players: Object[] = [
    { id: 1, name: 'Sebastián' },
    { id: 2, name: 'José' },
    { id: 3, name: 'Charlie' },
  ];

  // Method to retrieve all players
  public getAllPlayers(): Object[] {
    return this.players;
  }

  // Method to retrieve a player by ID
  public getPlayerById(playerId: string) {
    throw new Error('Not implemented');
  }

  // Method to create a new player
  public createPlayer(playerData: any) {
    throw new Error('Not implemented');
  }

  // Method to update a player
  public updatePlayer(playerId: string, playerData: any) {
    throw new Error('Not implemented');
  }

  // Method to delete a player
  public deletePlayer(playerId: string) {
    throw new Error('Not implemented');
  }
}
