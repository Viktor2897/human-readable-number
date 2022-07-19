module.exports = function toReadable (number) {
  let numberAsString = String(number);
  let ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let indexZero, indexOne, indexTwo;
  if (number <= 19) {
    return ones[number];
  } else {
    switch (numberAsString.length) {
        case 2:
            indexZero = numberAsString[0];
            indexOne = numberAsString[1];
            if (number % 10 === 0) {
                return `${tens[indexZero]}`;
            } else {
                return `${tens[indexZero]} ${ones[indexOne]}`;
            };
        case 3:
            indexZero = numberAsString[0];
            indexOne = numberAsString[1];
            indexTwo = numberAsString[2];
            if (number % 100 === 0) {
                return `${ones[indexZero]} hundred`;
            } else if (number % 100 <= 19) {
                return `${ones[indexZero]} hundred ${ones[number % 100]}`;
            } else if (number % 10 === 0) {
                return `${ones[indexZero]} hundred ${tens[indexOne]}`;
            } else {
                return `${ones[indexZero]} hundred ${tens[indexOne]} ${ones[indexTwo]}`;
            }
    }
  }
}