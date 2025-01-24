// Test suite for your backend APIs
const request = require('supertest');
const app = require('../backend/server');

describe('GET /api/deploy', () => {
    it('should start deployment', (done) => {
        request(app)
            .get('/api/deploy')
            .expect(200, done);
    });
});
