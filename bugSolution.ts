function printNumber(num: number): void {
  console.log(num);
}

function checkNumber(num: number): boolean {
  if (num > 10) {
    return true; 
  } else {
    return false; 
  }
}

let myNumber: number = 12;

if (checkNumber(myNumber)) {
  printNumber(myNumber);
} else {
  printNumber(0);
}