export const checkUpperCaseLetter = (text: string) => {
  return new RegExp(/[A-Z]/).test(text);
};
export const checkLowerCaseLetter = (text: string) => {
  return new RegExp(/[a-z]/).test(text);
};
export const checkSpecialCharacters = (text: string) => {
  return new RegExp(/[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]/).test(text);
};
export const checkDigitCharacters = (text: string) => {
  return new RegExp(/[0-9]/).test(text);
};
