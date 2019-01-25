const sortingArray = require('./InsertionSortWithCircularArray');

describe('insertSmallest', () => {
  it('should insert the given value to the head (modulo len) of the circular array', () => {
    const circularArray = {
      array: [3, 4, 5, 6, -1, -1, -1],
      tail: 3,
      head: 0,
      len: 7,
      valid: 4,
    };
    expect(sortingArray.insertSmallest(2, circularArray)).toEqual({
      array: [3, 4, 5, 6, -1, -1, 2],
      tail: 3,
      head: 6,
      len: 7,
      valid: 5,
    });
  });
  it('should insert the given value to the head (modulo len) of the circular array', () => {
    const circularArray = {
      array: [3, 4, 5, 6, -1, -1, 2],
      tail: 3,
      head: 0,
      len: 7,
      valid: 5,
    };
    expect(sortingArray.insertSmallest(1, circularArray)).toEqual({
      array: [3, 4, 5, 6, -1, 1, 2],
      tail: 3,
      head: 5,
      len: 7,
      valid: 6,
    });
  });
  it('should insert the given value to the head (modulo len) of the circular array', () => {
    const circularArray = {
      array: [-1, -1, -1, -1, -1, -1, -1],
      tail: 0,
      head: 0,
      len: 7,
      valid: 0,
    };
    expect(sortingArray.insertSmallest(1, circularArray)).toEqual({
      array: [1, -1, -1, -1, -1, -1, -1],
      tail: 0,
      head: 0,
      len: 7,
      valid: 1,
    });
  });
});

describe('insertLargest', () => {
  it('should insert the given value to the tail (modulo len) of the circular array', () => {
    const circularArray = {
      array: [1, 2, 3, 4, -1, -1],
      tail: 3,
      head: 0,
      len: 6,
      valid: 4,
    };
    expect(sortingArray.insertLargest(7, circularArray)).toEqual({
      array: [1, 2, 3, 4, 7, -1],
      tail: 4,
      head: 0,
      len: 6,
      valid: 5,
    });
  });
  it('should insert the given value to the tail (modulo len) of the circular array', () => {
    const circularArray = {
      array: [3, 4, 5, 6, 7, -1, 2],
      tail: 4,
      head: 6,
      len: 7,
      valid: 6,
    };
    expect(sortingArray.insertLargest(8, circularArray)).toEqual({
      array: [3, 4, 5, 6, 7, 8, 2],
      tail: 5,
      head: 6,
      len: 7,
      valid: 7,
    });
  });

  it('should insert the given value to the tail (modulo len) of the circular array', () => {
    const circularArray = {
      array: [-1, 4, 5, 6, 7, 8, 10],
      tail: 6,
      head: 1,
      len: 7,
      valid: 6,
    };
    expect(sortingArray.insertLargest(11, circularArray)).toEqual({
      array: [11, 4, 5, 6, 7, 8, 10],
      tail: 0,
      head: 1,
      len: 7,
      valid: 7,
    });
  });
});
describe('findPosition', () => {
  it('should return an array which has the number of elemnts smaller than a given value and the number of elements larger than the given element in the circular array', () => {
    const circularArray = {
      array: [1, 2, 3, 5, -1, -1],
      tail: 3,
      head: 0,
      len: 6,
      valid: 4,
    };
    expect(sortingArray.findPosition(4, circularArray)).toEqual([3, 1]);
  });
  it('should return an array which has the number of elemnts smaller than a given value and the number of elements larger than the given element in the circular array', () => {
    const circularArray = {
      array: [3, 4, 5, 9, 10, -1, 2],
      tail: 4,
      head: 6,
      len: 7,
      valid: 6,
    };
    expect(sortingArray.findPosition(8, circularArray)).toEqual([4, 2]);
  });

  it('should return an array which has the number of elemnts smaller than a given value and the number of elements larger than the given element in the circular array', () => {
    const circularArray = {
      array: [-1, 4, 6, 7, 8, 9, 10],
      tail: 6,
      head: 1,
      len: 7,
      valid: 6,
    };
    expect(sortingArray.findPosition(5, circularArray)).toEqual([1, 5]);
  });
});


describe('insertMiddle', () => {
  it('should insert the given value at the right position of the circular array', () => {
    const circularArray = {
      array: [2, 4, 6, 9, 10, -1, 1],
      tail: 4,
      head: 6,
      len: 7,
      valid: 6,
    };
    expect(sortingArray.insertMiddle(8, circularArray)).toEqual({
      array: [2, 4, 6, 8, 9, 10, 1],
      tail: 5,
      head: 6,
      len: 7,
      valid: 7,
    });
  });
  it('should insert the given value at the right position of the circular array', () => {
    const circularArray = {
      array: [3, 4, 8, 10, 45, -1, -1, 1],
      tail: 4,
      head: 7,
      len: 8,
      valid: 6,
    };
    expect(sortingArray.insertMiddle(9, circularArray)).toEqual({
      array: [3, 4, 8, 9, 10, 45, -1, 1],
      tail: 5,
      head: 7,
      len: 8,
      valid: 7,
    });
  });
  it('should insert the given value at the right position of the circular array', () => {
    const circularArray = {
      array: [1, 2, 3, 5, 6, 7, -1],
      tail: 5,
      head: 0,
      len: 7,
      valid: 6,
    };
    expect(sortingArray.insertMiddle(4, circularArray)).toEqual({
      array: [1, 2, 3, 4, 5, 6, 7],
      tail: 6,
      head: 0,
      len: 7,
      valid: 7,
    });
  });
  it('should insert the given value at the right position of the circular array', () => {
    const circularArray = {
      array: [1, 2, 3, 5, 6, 7, -1],
      tail: 5,
      head: 0,
      len: 7,
      valid: 6,
    };
    expect(sortingArray.insertMiddle(4, circularArray)).not.toEqual({
      array: [2, 3, 4, 5, 6, 7, 1],
      tail: 5,
      head: 6,
      len: 7,
      valid: 7,
    });
  });
});

describe('main', () => {
  it('should sort the input array in a circular fashion', () => {
    expect(sortingArray.main([25, 57, 37, 48, 12, 92, 86, 33])).toEqual([33, 37, 48, 57, 86, 92, 12, 25]);
  });
  it('should sort the input array in a circular fashion', () => {
    expect(sortingArray.main([33, 32, 31, 30, 25, 24, 21, 17, 14])).toEqual([33, 14, 17, 21, 24, 25, 30, 31, 32]);
  });
});
