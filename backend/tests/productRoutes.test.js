import { describe, it, expect } from 'vitest';
import request from 'supertest';

const baseURL = 'https://sneakervault.onrender.com';
describe('Product Routes', () => {
  it('Should fetch the list of basketball category products', async () => {
    const res = await request(baseURL)
      .get('/api/products/search?category=Basketball');
      console.log('Response Body:', res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.products).toBeInstanceOf(Array);
    expect(res.body.products.length).toBeGreaterThan(0); 
  });
});