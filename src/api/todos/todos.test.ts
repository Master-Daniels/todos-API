import request from 'supertest';

import app from '../../app';

describe('GET /api/v1/todos', () => {
  it('responds with an array of todos', (done) => {
    request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        [
          { content: 'First todo on the list', done: false },
          { content: 'Learn Typescript', done: Boolean('on-going') },
        ],
        done,
      );
  });
});
