import findTheNumber from "./findTheNumber.js";

const log = (msg) => console.info(msg);

(() => {
  const thisFtn = new findTheNumber(100);

  let i = 0;
  while (i <= thisFtn.getDetails().upperBound) {
    log(`Guessing ${i}`);
    if (thisFtn.checkSecretNumber(i)) {
      log(`${i} was the secret number!`);
      break;
    } else {
      // log(`The secret number was not ${i}.`);
      i++;
      continue;
    }
  }
})();
