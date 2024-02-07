import { PlayersService } from '../players.service';

describe('PlayersService', () => {
  let playersService: PlayersService;

  beforeEach(() => {
    playersService = new PlayersService();
  });

  it('should retrieve all players', () => {
    // Mock players data
    const mockPlayers = [
      { id: 1, name: 'Sebastián' },
      { id: 2, name: 'José' },
      { id: 3, name: 'Charlie' },
    ];

    (playersService as any).players = mockPlayers;

    const result = playersService.getAllPlayers();

    expect(result).toEqual(mockPlayers);
  });

  it('should retrieve a player by ID', () => {
    // Implement test logic to verify getPlayerById method
    // Mock any dependencies or external services if needed
  });

  it('should create a new player', () => {
    // Implement test logic to verify createPlayer method
    // Mock any dependencies or external services if needed
  });

  it('should update a player', () => {
    // Implement test logic to verify updatePlayer method
    // Mock any dependencies or external services if needed
  });

  it('should delete a player', () => {
    // Implement test logic to verify deletePlayer method
    // Mock any dependencies or external services if needed
  });
});
