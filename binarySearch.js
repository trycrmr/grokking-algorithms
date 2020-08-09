const guess = (thisFtn) => {
  return new Promise((resolve, reject) => {
    try {
      let low = 0;
      let high = 100;
      let mid = Math.round((low + high) / 2);
      while (low <= high) {
        if (thisFtn.checkSecretNumber(mid)) {
          return resolve(thisFtn);
        } else {
          if (mid < thisFtn.secretNumber) {
            low = mid;
            mid = Math.round(high - (high - low) / 2);
          } else {
            high = mid;
            mid = Math.round(high - (high - low) / 2);
          }
        }
      }
    } catch (err) {
      reject(err);
    }
  });
};

const binarySearch = (thisFtn) => {
  return new Promise((resolve, reject) => {
    guess(thisFtn)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export default binarySearch;
