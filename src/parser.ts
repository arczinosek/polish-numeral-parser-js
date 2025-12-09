import { normalize } from './normalize';

const THOUSAND = 1_000;
const MILLION = 1_000_000;
const BILLION = 1_000_000_000;

const DICT_NUMBERS = new Map<string, number>([
  ['zero', 0],
  ['jeden', 1],
  ['jednego', 1],
  ['dziesiec', 10],
  ['dziesieciu', 10],
  ['jedenascie', 11],
  ['jedenastu', 11],
  ['sto', 100],
  ['stu', 100],
  ['dwa', 2],
  ['dwoch', 2],
  ['dwanascie', 12],
  ['dwunastu', 12],
  ['dwadziescia', 20],
  ['dwudziestu', 20],
  ['dwiescie', 200],
  ['dwustu', 200],
  ['trzy', 3],
  ['trzech', 3],
  ['trzynascie', 13],
  ['trzynastu', 13],
  ['trzydziesci', 30],
  ['trzydziestu', 30],
  ['trzysta', 300],
  ['trzystu', 300],
  ['cztery', 4],
  ['czterech', 4],
  ['czternascie', 14],
  ['czternastu', 14],
  ['czterdziesci', 40],
  ['czterdziestu', 40],
  ['czterysta', 400],
  ['czterystu', 400],
  ['piec', 5],
  ['pieciu', 5],
  ['pietnascie', 15],
  ['pietnastu', 15],
  ['piecdziesiat', 50],
  ['piecdziesieciu', 50],
  ['piecset', 500],
  ['pieciuset', 500],
  ['szesc', 6],
  ['szesciu', 6],
  ['szestnascie', 16],
  ['szestnastu', 16],
  ['szescdziesiat', 60],
  ['szescdziesieciu', 60],
  ['szescset', 600],
  ['szesciuset', 600],
  ['siedem', 7],
  ['siedmiu', 7],
  ['siedemnascie', 17],
  ['siedemnastu', 17],
  ['siedemdziesiat', 70],
  ['siedemdziesieciu', 70],
  ['siedemset', 700],
  ['siedmiuset', 700],
  ['osiem', 8],
  ['osmiu', 8],
  ['osiemnascie', 18],
  ['osiemnastu', 18],
  ['osiemdziesiat', 80],
  ['osiemdziesieciu', 80],
  ['osiemset', 800],
  ['osmiuset', 800],
  ['dziewiec', 9],
  ['dziewieciu', 9],
  ['dziewietnascie', 19],
  ['dziewietnastu', 19],
  ['dziewiecdziesiat', 90],
  ['dziewiecdziesieciu', 90],
  ['dziewiecset', 900],
  ['dziewieciuset', 900],
]);

const DICT_MULTIPLIERS = new Map<string, number>([
  ['tysiac', THOUSAND],
  ['tysiace', THOUSAND],
  ['tysiecy', THOUSAND],
  ['milion', MILLION],
  ['miliony', MILLION],
  ['milionow', MILLION],
  ['miliard', BILLION],
  ['miliardy', BILLION],
  ['miliardow', BILLION],
]);

const DICT_CURRENCY = new Map<string, number>([
  ['gr', 0.01],
  ['grosz', 0.01],
  ['groszy', 0.01],
  ['grosze', 0.01],
  ['zl', 1],
  ['zloty', 1],
  ['zlote', 1],
  ['zlotych', 1],
]);

export const NUMBERS_DICTIONARY = [...Array.from(DICT_NUMBERS.keys()), ...Array.from(DICT_MULTIPLIERS.keys())];

export const parseVerbalNumberPl = (input: string): number => {
  const words = normalize(input).split(' ');

  let total = 0.0;
  let current = 0.0;

  for (const word of words) {
    const number = DICT_NUMBERS.get(word);

    if (undefined !== number) {
      current += number;
      continue;
    }

    const multiplier = DICT_MULTIPLIERS.get(word);

    if (undefined !== multiplier) {
      if (!current) {
        current = multiplier;
      } else {
        current *= multiplier;
      }

      total += current;
      current = 0.0;

      continue;
    }

    const currency = DICT_CURRENCY.get(word);

    if (undefined !== currency) {
      current *= currency;
      total += current;
      current = 0.0;
    } else {
      console.warn('Nothing found', { word });
    }
  }

  total += current;

  return total;
};
