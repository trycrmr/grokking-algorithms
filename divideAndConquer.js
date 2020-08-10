const divide = (arr, thisFtn) => {
  if (!arr) return false;
  if (arr.length === 1) {
    if (thisFtn.checkSecretNumber(arr[0])) return thisFtn;

    return false;
  } else {
    let arrLeft = divide(arr.slice(0, Math.floor(arr.length / 2)), thisFtn);
    let arrRight = divide(
      arr.slice(Math.ceil(arr.length / 2), arr.length),
      thisFtn
    );
    if (typeof arrLeft === "findTheNumber") return arrLeft;
    if (typeof arrRight === "findTheNumber") return arrRight;
  }
};

const divideAndConquer = (thisFtn) => {
  return new Promise((resolve, reject) => {
    try {
      let arrOfNums = new Array(thisFtn.upperBound)
        .fill(0)
        .map((thisNum, idx) => idx);
      resolve(divide(arrOfNums, thisFtn));
    } catch (err) {
      reject(err);
    }
  });
};

export default divideAndConquer;
