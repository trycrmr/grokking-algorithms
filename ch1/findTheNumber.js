class findTheNumber {
  constructor(upperBound) {
    this.lowerBound = 0;
    this.upperBound = upperBound;
    this.secretNumber = (() => Math.round(Math.random() * upperBound))();
    this.numberOfGuesses = 0;
  }

  checkSecretNumber = (guess) => {
    if (guess === this.secretNumber) {
      return true;
    } else {
      this.numberOfGuesses++;
      return false;
    }
  };

  getDetails = () => {
    return {
      numberOfGuesses: this.numberOfGuesses,
      lowerBound: this.lowerBound,
      upperBound: this.upperBound,
    };
  };
}

export default findTheNumber;
