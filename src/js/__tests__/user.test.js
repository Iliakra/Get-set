/* eslint-disable no-undef */
import { character } from '../app';


test('if powerMode is true', () => {
  character.powerMode = true;
  const received = character.powerMode;
  const expected = '28 , 30 , 20';
  expect(received).toBe(expected);
});

test('if powerMode used during more than three attacks', () => {
  character.powerMode = true;
  character.powerMode = true;
  character.powerMode = true;
  character.powerMode = true;
  const received = character.modeUp;
  const expected = false;
  expect(received).toBe(expected);
});

test('if powerMode-insert is incorrect', () => {
  expect(() => {
    character.powerMode = 25;
  }).toThrow(new Error('Введены некорректные данные'));
});
