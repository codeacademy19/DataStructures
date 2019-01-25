const insertSmallest = (value, circularArray) => {
  while (circularArray.array[circularArray.head] > value && circularArray.array[circularArray.head] !== -1) {
    // circularArray.head=(circularArray.head-1)%circularArray.len;
    circularArray.head = circularArray.head === 0 ? circularArray.len - 1 : circularArray.head - 1;
  }
  circularArray.array[circularArray.head] = value;
  circularArray.valid+=1;
  return circularArray;
};
const insertLargest = (value, circularArray) => {
  while (circularArray.array[circularArray.tail] < value && circularArray.array[circularArray.tail] !== -1) {
    // circularArray.tail=(circularArray.tail-1)%circularArray.len;
    circularArray.tail = circularArray.tail === circularArray.len - 1 ? 0 : circularArray.tail + 1;
  }
  circularArray.array[circularArray.tail] = value;
  circularArray.valid+=1;
  return circularArray;
};
const findPosition=(value,circularArray)=>{
    let countOfLeft=0;
    while (circularArray.array[circularArray.head] < value && circularArray.array[circularArray.head] !== -1){
        circularArray.head = circularArray.head === circularArray.len - 1 ? 0 : circularArray.head + 1;
        countOfLeft+=1;
    }
    return [countOfLeft,circularArray.valid-countOfLeft];
} 
module.exports = { insertSmallest, insertLargest, findPosition };
