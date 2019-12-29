import * as atypes from './actionTypes';

it('Action constant are same as string', () => {
  for (const [key, value] of Object.entries(atypes)) {
    expect(key).toBe(value);
  }
});
