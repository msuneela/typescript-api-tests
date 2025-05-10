import { Given } from '@cucumber/cucumber';
import request from 'supertest';
import responseContext from '../support/response-context';

const API_BASE = 'https://testapi.io';

Given('I send a GET request to {string}', async (endpoint: string) => {
  responseContext.setStartTime(Date.now());
  const res = await request(API_BASE).get(endpoint);
  responseContext.setEndTime(Date.now());
  responseContext.setResponse(res);
});
