import { add, divide, multiply, subtract } from './utils';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(5, 6)).toBe(11);
  expect(add(0, 2)).toBe(2);
});

test('subtract', () => {
  expect(subtract(1, 2)).toBe(-1);
  expect(subtract(8, 6)).toBe(2);
  expect(subtract(0, 2)).toBe(-2);
});

test('multiply', () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(8, 6)).toBe(48);
  expect(multiply(0, 2)).toBe(0);
});

test('divide', () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(0, 2)).toBe(0);
  expect(divide(2, 0)).toBe(Infinity);
  expect(divide(-2, 0)).toBe(-Infinity);
  expect(divide(0, 0)).toBe(NaN);
});
