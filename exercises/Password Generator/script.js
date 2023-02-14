// get password length with validation via recursion
const getLength = (prompt = 'Enter the number of characters', start = 8, end = 128) => {
  const answer = Number(window.prompt(`${prompt} between ${start} and ${end}:`));
  const valid = answer && answer >= start && answer <= end;
  return valid ? answer : getLength('Please enter a whole number');
};

const generatePassword = () => {
  const charactersMap = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    numeric: '0123456789',
    special: '!@#$%^&()+?/-:;[]{}.<>=_`|~',
  };

  // get user options
  const characterPool = Object.keys(charactersMap)
    .flatMap((name) => confirm(`Would you like ${name}?`) ? [...charactersMap[name]] : []);

  // if all options were false, restart process via recursion
  if (!characterPool.length) return generatePassword();

  // build password
  const length = getLength();
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characterPool[Math.floor((Math.random() * characterPool.length))];
  }

  return result;
};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
