const insertSmallest = (value, circularArray) => {
  while (circularArray.array[circularArray.head] > value && circularArray.array[circularArray.head] !== -1) {
    // circularArray.head=(circularArray.head-1)%circularArray.len;
    circularArray.head = circularArray.head === 0 ? circularArray.len - 1 : circularArray.head - 1;
  }
  circularArray.array[circularArray.head] = value;
  circularArray.valid += 1;
  return circularArray;
};
const insertLargest = (value, circularArray) => {
  while (circularArray.array[circularArray.tail] < value && circularArray.array[circularArray.tail] !== -1) {
    // circularArray.tail=(circularArray.tail-1)%circularArray.len;
    circularArray.tail = circularArray.tail === circularArray.len - 1 ? 0 : circularArray.tail + 1;
  }
  circularArray.array[circularArray.tail] = value;
  circularArray.valid += 1;
  return circularArray;
};
const findPosition = (value, circularArray) => {
  let countOfLeft = 0;
  let head = circularArray.head;
  while (circularArray.array[head] < value && circularArray.array[head] !== -1) {
    head = head === circularArray.len - 1 ? 0 : head + 1;
    countOfLeft += 1;
  }
  return [countOfLeft, circularArray.valid - countOfLeft];
};
const insertMiddle = (value, circularArray) => {
  [leftNo, rightNo] = findPosition(value, circularArray);
  // console.log([leftNo,rightNo]);
  if (leftNo < rightNo) {
    let next = circularArray.head === 0 ? circularArray.len - 1 : circularArray.head - 1;
    let current = circularArray.head;
    for (let i = 0; i < leftNo; i++) {
      // console.log('next',next,'current',current);
      circularArray.array[next] = circularArray.array[current];
      next = current;
      current = next === circularArray.len - 1 ? 0 : next + 1;
      // console.log(circularArray.array)
    }
    circularArray.array[next] = value;

    circularArray.valid += 1;
    circularArray.head = circularArray.head === 0 ? circularArray.len - 1 : circularArray.head - 1;
  } else {
    let next = circularArray.tail === circularArray.len - 1 ? 0 : circularArray.tail + 1;
    let current = circularArray.tail;
    for (let i = 0; i < rightNo; i++) {
      // console.log('next',next,'current',current);
      circularArray.array[next] = circularArray.array[current];
      next = current;
      current = next === 0 ? circularArray.len - 1 : next - 1;
      // console.log(circularArray.array)
    }
    circularArray.array[next] = value;

    circularArray.valid += 1;
    circularArray.tail = circularArray.tail === circularArray.len - 1 ? 0 : circularArray.tail + 1;
  }

  return circularArray;
};

/*console.log(insertMiddle(9, {
    array: [3,4,8,10,45,-1,-1,1 ],
    tail: 4,
    head: 7,
    len: 8,
    valid:6
}));*/
module.exports = {
  insertSmallest, insertLargest, findPosition, insertMiddle,
};
