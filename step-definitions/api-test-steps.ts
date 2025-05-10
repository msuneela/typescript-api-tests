import { Then } from '@cucumber/cucumber';
import assert from 'assert';
import responseContext from '../support/response-context';

Then('the response status should be {int}', (statusCode: number) => {
  const res = responseContext.getResponse();
  assert.strictEqual(res.status, statusCode);
});

Then('the response time should be less than {int}ms', (maxTime: number) => {
  const duration = responseContext.getDuration();
  assert.ok(duration < maxTime, `Expected response time < ${maxTime}, got ${duration}`);
});

Then('every schedule item should have a non-empty id', () => {
  const elements = responseContext.getResponse().body.schedule?.elements || [];
  elements.forEach((item: any, i: number) => {
    assert.ok(item.id && item.id.trim() !== '', `ID is null or empty at index ${i}` );
  });
});

Then('every schedule item should have type {string} in {string}', (expectedType, parent) => {
  const elements = responseContext.getResponse().body.schedule?.elements || [];
  elements.forEach((item: any, i: number) => {
    const actualType = item[parent]?.type;
    assert.strictEqual(actualType, expectedType, `Item ${i} has type "${actualType}" instead of "${expectedType}"`);
  });
});

Then('every schedule item should have a non-empty episode title', () => {
  const elements = responseContext.getResponse().body.schedule?.elements || [];
  elements.forEach((item: any, i: number) => {
    const title = item.episode?.title;
    assert.ok(title && title.trim() !== '', `Item ${i} has empty title`);
  });
});

Then('only one schedule item should have live set to true', () => {
  const elements = responseContext.getResponse().body.schedule?.elements || [];
  const liveItems = elements.filter((item: any) => item.episode?.live === true);
  assert.strictEqual(liveItems.length, 1, `Expected 1 live item, found ${liveItems.length}`);
});

Then('transmissionStart should be before transmissionEnd for all items', () => {
  const elements = responseContext.getResponse().body.schedule?.elements || [];
  elements.forEach((item: any, i: number) => {
    const start = new Date(item.transmission_start);
    const end = new Date(item.transmission_end);
    assert.ok(start < end, `Item ${i}: start ${start} is not before end ${end}`);
  });
});

Then('the response header should contain a Date header', () => {
  const dateHeader = responseContext.getResponse().header['date'];
  assert.ok(dateHeader, 'Date header missing');
  assert.ok(!isNaN(new Date(dateHeader).getTime()), 'Invalid Date header');
});

Then('the response body should contain {string} and {string}', (key1, key2) => {
  const error = responseContext.getResponse().body.error || {};
  assert.ok(key1 in error, `${key1} missing in error object`);
  assert.ok(key2 in error, `${key2} missing in error object`);
});

