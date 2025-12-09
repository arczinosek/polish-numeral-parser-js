import { describe, expect, it } from 'vitest';
import { normalize, stripPolishDiacritics } from '../src/normalize.js';

describe('normalize', () => {
  it('should lowercase, trim, replace multiplied spaces with one and strip polish diactirics', () => {
    const input = '  ZAŻÓŁĆ gęślą  jaźń ';
    const expected = 'zazolc gesla jazn';

    const result = normalize(input);

    expect(result).toStrictEqual(expected);
  });
});

describe('stripPolishDiacritics', () => {
  it('should replace polish diacritics with non-diacritic equivalents', () => {
    const input = 'ąćęłńóśżź ŹŻŚÓŃŁĘĆĄ ąćęłńóśżź ŹŻŚÓŃŁĘĆĄ';
    const expected = 'acelnoszz ZZSONLECA acelnoszz ZZSONLECA';

    const result = stripPolishDiacritics(input);

    expect(result).toStrictEqual(expected);
  });
});
