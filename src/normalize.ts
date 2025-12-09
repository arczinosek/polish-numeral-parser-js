export const stripPolishDiacritics = (input: string): string =>
  input
    .replace(/[Ą]/g, 'A')
    .replace(/[ą]/g, 'a')
    .replace(/[Ć]/g, 'C')
    .replace(/[ć]/g, 'c')
    .replace(/[Ę]/g, 'E')
    .replace(/[ę]/g, 'e')
    .replace(/[Ł]/g, 'L')
    .replace(/[ł]/g, 'l')
    .replace(/[Ń]/g, 'N')
    .replace(/[ń]/g, 'n')
    .replace(/[Ó]/g, 'O')
    .replace(/[ó]/g, 'o')
    .replace(/[Ś]/g, 'S')
    .replace(/[ś]/g, 's')
    .replace(/[Ż]/g, 'Z')
    .replace(/[ż]/g, 'z')
    .replace(/[Ź]/g, 'Z')
    .replace(/[ź]/g, 'z');

export const normalize = (input: string): string =>
  stripPolishDiacritics(input.trim().toLocaleLowerCase().replace(/\s\s+/g, ' '));
