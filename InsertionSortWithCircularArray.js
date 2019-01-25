const insertSmallest = (value, circularArray) => {
  while (circularArray.array[circularArray.head] > value && circularArray.array[circularArray.head] !== -1) {
    // circularArray.head=(circularArray.head-1)%circularArray.len;
    circularArray.head = circularArray.head === 0 ? circularArray.len - 1 : circularArray.head - 1;
  }
  circularArray.array[circularArray.head] = value;
  return circularArray;
};
module.exports = { insertSmallest };
