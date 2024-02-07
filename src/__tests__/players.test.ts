import request from 'supertest';
import app from '../server';

describe('Players API', () => {
  it('GET /api/players should return list of players', async () => {
    const response = await request(app).get('/api/players');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
  });
});
