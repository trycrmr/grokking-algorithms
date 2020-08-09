const simpleSearch = (thisFtn) => {
  return new Promise((resolve, reject) => {
    try {
      let i = 0;
      while (i <= thisFtn.getDetails().upperBound) {
        if (thisFtn.checkSecretNumber(i)) {
          break;
        } else {
          i++;
        }
      }
    } catch (err) {
      reject(err);
    }
    resolve(thisFtn);
  });
};

export default simpleSearch;
