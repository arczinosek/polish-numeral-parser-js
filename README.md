# Polish numeral parser JS

`polish-numeral-parser-js` is a JavaScript library used to parse verbal numbers in Polish into JS `number` values. It was created primarily for the purpose of parsing amounts written in words.

## Installation

```bash
npm install --save @arczinosek/polish-numeral-parser
```

## Usage

### parseVerbalNumberPl

```js
import { parseVerbalNumberPl } from '@arczinosek/polish-numeral-parser';

const value = parseVerbalNumberPl(
  'sto dwadzieścia trzy tysiące czterysta pięćdziesiąt sześć złotych siedemdziesiąt osiem groszy',
);
// value: 123456.78
```

### NUMBERS_DICTIONARY

```js
import { NUMBERS_DICTIONARY } from '@arczinosek/polish-numeral-parser';

console.log(NUMBERS_DICTIONARY);

// [
//   'zero',             'jeden',              'jednego',
//   'dziesiec',         'dziesieciu',         'jedenascie',
// ...
```

### stripPolishDiacritics

Replaces all polish diacritics with non-diacritic equivalents.

```js
import { stripPolishDiacritics } from '@arczinosek/polish-numeral-parser';

const stripped = stripPolishDiacritics('ĄĆĘŁŃÓŚŻŹąćęłńóśżź');

// stripped: ACELNOSZZacelnoszz
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](./LICENSE)
