import { test, expect, vi } from 'vitest';
// vi.spyOn is a function provided by the vitest testing framework
// that allows you to create a mock function that spies on a method of an object.
// This is useful for testing purposes, as it lets you track calls to the method,
// including the arguments passed and the return values.
const logSpy = vi.spyOn(console, 'log');

test('a super simple test', () => {
  console.log('Hello, world!');

  //
  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith('Hello, world!');
  expect(logSpy).toHaveBeenCalledTimes(1);

});
