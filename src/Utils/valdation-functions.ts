export const checkUpperCaseLetter = (text:string)=>{
    const res = new RegExp(/[A-Z]/).test(text)
    return res;
}
export const checkLowerCaseLetter = (text:string)=>{
    const res = new RegExp(/[a-z]/).test(text)
    return res;
}
export const checkSpecialCharacters = (text:string)=>{
    const res = new RegExp(/[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]/).test(text);
    return res;
}
export const checkDigitCharacters = (text:string)=>{
    const res = new RegExp(/[0-9]/).test(text);
    return res;
}