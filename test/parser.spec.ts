import { describe, expect, it } from 'vitest';

import { parseVerbalNumberPl } from '../src';

describe('parseVerbalNumberPl', () => {
  const cases = [
    {
      line: 'sto',
      expected: 100.0,
    },
    {
      line: 'milion',
      expected: 1_000_000,
    },
    {
      line: 'jeden milion sto tysięcy zł trzydzieści siedem groszy',
      expected: 1_100_000.37,
    },
    {
      line: 'jeden milion sto tysięcy trzydzieści siedem groszy',
      expected: 1_100_000.37,
    },
    {
      line: 'zero złotych dziewięćdziesiąt groszy',
      expected: 0.9,
    },
    {
      line: 'cztery miliardy pięćset sześćdziesiąt siedem milionów osiemset dziewięćdziesiąt jeden tysięcy dwieście trzydzieści złotych zero groszy',
      expected: 4_567_891_230,
    },
  ];

  it.each(cases)('should parse "$line" to $expected', ({ line, expected }) => {
    const result = parseVerbalNumberPl(line);

    expect(result).toStrictEqual(expected);
  });
});
