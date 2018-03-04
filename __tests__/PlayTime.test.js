import { formatPlayTime } from '../util/PlayTime';

it('format play time correctly', () => {
  expect(formatPlayTime({
    durationMillis: 10000,
    positionMillis: 0,
  })).toBe('00:00/00:10');

  expect(formatPlayTime({
    durationMillis: 60000,
    positionMillis: 50000,
  })).toBe('00:50/01:00');

  expect(formatPlayTime({
    durationMillis: 125000,
    positionMillis: 50000,
  })).toBe('00:50/02:05');
});
