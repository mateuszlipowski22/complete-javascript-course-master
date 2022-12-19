// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

console.log('test');

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const findTempAmplitude = function (arr) {
  const filteredData = [];
  arr.forEach(element => {
    if (typeof element == 'number') {
      filteredData.push(element);
    }
  });

  filteredData.sort((a, b) => b - a);

  return filteredData[0] - filteredData[filteredData.length - 1];
};

console.log(findTempAmplitude(temp));

const findTempAmplitudeNew = function (arr1, arr2) {
  const arr = arr1.concat(arr2);

  return findTempAmplitude(arr);
};

console.log(findTempAmplitudeNew(temp, [-120, 20]));
