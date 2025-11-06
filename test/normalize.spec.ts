import { describe, expect, it } from 'vitest';
import { normalize } from '../src/normalize.js';

describe('normalize', () => {
  it('should replace polish letters', () => {
    const input = 'ąćęłńóśżźźżśóńłęćą';
    const expected = 'acelnoszzzzsonleca';

    const result = normalize(input);

    expect(result).toStrictEqual(expected);
  });

  it('should replace multiplied spaces with one', () => {
    const input = ' sto  dwadzieścia    dziewięć tysięcy  ';
    const expected = 'sto dwadziescia dziewiec tysiecy';

    const result = normalize(input);

    expect(result).toStrictEqual(expected);
  });
});
