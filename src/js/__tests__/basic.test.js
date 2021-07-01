import sortPlayers from '../basic';

const result = sortPlayers([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('players are sorted in descending order of health', () => {
  expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  // expect(result).not.toBe(expected);
  expect(result).toEqual(expected);
});
