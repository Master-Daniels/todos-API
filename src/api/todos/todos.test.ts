import request from 'supertest';

import app from '../../app';
import { client } from '../../lib/database';


beforeAll(async () => { 

});
afterAll(async () => { 
  client?.close();
});



describe('GET /api/v1/todos', () => {
  it('responds with an array of todos', () => {
    request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('data');
        expect(response.body.length).toBe(0);
        // expect(response.body[0]).toHaveProperty('content');
        // expect(response.body[0]).toHaveProperty('done');
      });
  });
});
