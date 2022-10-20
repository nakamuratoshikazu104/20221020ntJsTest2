function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

let checkYear = [2020, 2021];
for (i = 0; i < 2; i++) {
  if (leapYear(checkYear[i])) {
    console.log(`${checkYear[i]}年はうるう年です。`);
  } else {
    console.log(`${checkYear[i]}年はうるう年ではありません。`);
  }
}
