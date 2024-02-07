# Poker

## Overview

This project is an Express REST API for a Poker game. It provides endpoints to manage poker players, players, and related functionalities.

## Features

- Create, retrieve, update, and delete poker players
- Manage players in a poker game
- Handle game actions such as dealing cards, betting, and determining winners

## Installation

To run the Poker API locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory (`poker`).
3. Install dependencies by running `npm install`.
4. Build the TypeScript files by running `npm run build`.
5. Start the server with `npm start`.

## Usage

### Endpoints

##### List API Rest here

- **GET /api/players**: Retrieve a list of all poker players.
- **GET /api/players/:id**: Retrieve details of a specific poker game.
- **POST /api/players**: Create a new poker game.
- **PUT /api/players/:id**: Update an existing poker game.
- **DELETE /api/players/:id**: Delete a poker game.
- **POST /api/players/:id/players**: Add a player to a poker game.
- **DELETE /api/players/:id/players/:playerId**: Remove a player from a poker game.

### Example Usage

#### Example API Rest consumption

```bash
curl -X GET http://localhost:3000/api/players/"
```

## Testing

Unit tests are implemented using Jest. To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue to discuss proposed changes or submit a pull request directly.

## License

This project is licensed under the [MIT License](LICENSE).
